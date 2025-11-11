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

  const convertSingleImage = async (imageUrl: string, selectedPrompt: PromptType) => {
    const convertedImageUrl = await generateAiImage({ imageUrl, selectedPrompt });
    return convertedImageUrl;
  };

  const convertAllImages = async () => {
    if (isAiConverting) return;
    else setIsAiConverting(true);

    const convertedImageUrls = await Promise.all(
      imageUrls.map((x) => convertSingleImage(x.imageUrl, x.promptName)),
    );
    setAiConvertImage(convertedImageUrls);

    setAiConvertHistory((prev) => {
      const newHistory = [...prev];
      convertedImageUrls.forEach((url, index) => {
        if (!newHistory[index]) {
          newHistory[index] = [];
        }
        if (!newHistory[index].includes(url)) {
          newHistory[index].push(url);
        }
      });
      return newHistory;
    });

    setIsAiConverting(false);
  };

  useEffect(() => {
    setHasAiConvertedOnce(false);
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
          />
        )}
      </div>
    </Provider>
  );
};

export default App;
