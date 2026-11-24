import { useEffect, useState } from 'react';

import generateAiImage from './api/openai';
import { Provider } from './lib';
import {
  AiConversionPage,
  CameraPage,
  InfoInputPage,
  StartPage,
  ThemeSelectPage,
} from './pageContainer';
import {
  type CardType,
  type ConvertImagePrompt,
  type PromptType,
  STEP,
  type Step,
  type userInfoFormType,
} from './types';

const App = () => {
  const [step, setStep] = useState<Step>(STEP.START);
  const [cardType, setCardType] = useState<CardType | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<userInfoFormType | null>(null);
  const [imageUrls, setImageUrls] = useState<ConvertImagePrompt[]>([]);
  const [isAiConvert, setIsAiConvert] = useState<boolean>(false);
  const [isAiConverting, setIsAiConverting] = useState<boolean>(false);
  const [aiConvertImage, setAiConvertImage] = useState<string[]>([]);
  const [aiConvertHistory, setAiConvertHistory] = useState<string[][]>([]);
  const [hasAiConvertedOnce, setHasAiConvertedOnce] = useState<boolean>(false);
  const [convertingIndices, setConvertingIndices] = useState<Set<number>>(new Set());
  const [previousPrompts, setPreviousPrompts] = useState<PromptType[]>([]);
  const [previousImageUrls, setPreviousImageUrls] = useState<string[]>([]);

  const convertSingleImage = async (imageUrl: string, selectedPrompt: PromptType) => {
    const convertedImageUrl = await generateAiImage({ imageUrl, selectedPrompt });
    return convertedImageUrl;
  };

  const convertAllImages = async () => {
    if (isAiConverting) return;
    setIsAiConverting(true);

    // 변경된 이미지의 인덱스만 추출
    const indicesToConvert = imageUrls
      .map((img, index) => {
        // 이미 변환된 적이 있고, 프롬프트가 동일하면 재변환 스킵
        if (
          aiConvertImage[index] &&
          previousPrompts[index] === img.promptName &&
          img.promptName !== null
        ) {
          return -1;
        }
        return index;
      })
      .filter((index) => index !== -1);

    // 변환이 필요한 이미지만 변환 중 상태로 설정
    setConvertingIndices(new Set(indicesToConvert));

    // 변환이 필요한 이미지만 변환
    const convertedImages = [...aiConvertImage];
    await Promise.all(
      indicesToConvert.map(async (index) => {
        const img = imageUrls[index];
        const url = await convertSingleImage(img.imageUrl, img.promptName);
        convertedImages[index] = url;

        // 히스토리에 추가
        setAiConvertHistory((prev) => {
          const newHistory = [...prev];
          if (!newHistory[index]) {
            newHistory[index] = [];
          }
          if (!newHistory[index].includes(url)) {
            newHistory[index].push(url);
          }
          return newHistory;
        });

        // 개별 변환 완료 시 상태 업데이트
        setConvertingIndices((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }),
    );

    setAiConvertImage(convertedImages);

    // 현재 프롬프트 상태 저장
    setPreviousPrompts(imageUrls.map((img) => img.promptName));

    setIsAiConverting(false);
  };

  useEffect(() => {
    // 실제 이미지 URL이 변경되었는지 확인 (재촬영인지 프롬프트 변경인지 구분)
    const currentImageUrlsOnly = imageUrls.map((item) => item.imageUrl);
    const isImageChanged =
      previousImageUrls.length === 0 ||
      currentImageUrlsOnly.length !== previousImageUrls.length ||
      currentImageUrlsOnly.some((url, index) => url !== previousImageUrls[index]);

    if (isImageChanged) {
      // 이미지가 변경되어도 히스토리는 유지하고, 현재 표시 이미지와 프롬프트만 초기화
      setHasAiConvertedOnce(false);
      setPreviousPrompts([]);
      setAiConvertImage([]);
      setPreviousImageUrls(currentImageUrlsOnly);
    } else {
      // 프롬프트만 변경된 경우 hasAiConvertedOnce만 false로 설정
      setHasAiConvertedOnce(false);
    }
  }, [imageUrls]);

  return (
    <Provider>
      <div className="flex h-screen items-center justify-center bg-[#f8f8f8]">
        {step === STEP.START && <StartPage setStep={setStep} setCardType={setCardType} />}
        {step === STEP.CAMERA && (
          <CameraPage
            setStep={setStep}
            setImageUrls={setImageUrls}
            cardType={cardType}
            setHasAiConvertedOnce={setHasAiConvertedOnce}
            setIsAiConvert={setIsAiConvert}
          />
        )}
        {step === STEP.AI_CONVERSION && (
          <AiConversionPage
            setStep={setStep}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            cardType={cardType}
            convertAllImages={convertAllImages}
            hasAiConvertedOnce={hasAiConvertedOnce}
            setHasAiConvertedOnce={setHasAiConvertedOnce}
            isAiConvert={isAiConvert}
            setIsAiConvert={setIsAiConvert}
          />
        )}
        {step === STEP.INFO_INPUT && (
          <InfoInputPage userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />
        )}
        {step === STEP.THEME_SELECT && (
          <ThemeSelectPage
            setStep={setStep}
            cardType={cardType}
            userInfo={userInfo}
            imageUrls={imageUrls}
            aiConvertImage={aiConvertImage}
            setAiConvertImage={setAiConvertImage}
            aiConvertHistory={aiConvertHistory}
            setAiConvertHistory={setAiConvertHistory}
            isAiConvert={isAiConvert}
            convertSingleImage={convertSingleImage}
            isAiConverting={isAiConverting}
            convertingIndices={convertingIndices}
            setConvertingIndices={setConvertingIndices}
          />
        )}
      </div>
    </Provider>
  );
};

export default App;
