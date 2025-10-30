import { useState } from 'react';

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

  const [aiConvertImage, setAiConvertImage] = useState<string[]>([]);

  const convertSingleImage = async (imageUrl: string, prompt: PromptType) => {
    const convertedImageUrl = await generateAiImage({ imageUrl, selectedPrompt: prompt });
    return convertedImageUrl;
  };

  const convertAllImages = async () => {
    const convertedImageUrls = await Promise.all(
      imageUrls.map((x) => convertSingleImage(x.imageUrl, x.promptName)),
    );
    setAiConvertImage(convertedImageUrls);
  };

  return (
    <Provider>
      <div className="flex h-screen items-center justify-center bg-[#f8f8f8]">
        {step === STEP.START && <StartPage setStep={setStep} setCardType={setCardType} />}
        {step === STEP.CAMERA && (
          <CameraPage setStep={setStep} setImageUrls={setImageUrls} cardType={cardType} />
        )}
        {step === STEP.AI_CONVERSION && (
          <AiConversionPage
            setStep={setStep}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            cardType={cardType}
            convertAllImages={convertAllImages}
          />
        )}
        {step === STEP.INFO_INPUT && (
          <InfoInputPage userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />
        )}
        {step === STEP.THEME_SELECT && <ThemeSelectPage setStep={setStep} cardType={cardType} />}
      </div>
    </Provider>
  );
};

export default App;
