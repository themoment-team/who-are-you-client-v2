import { useState } from 'react';

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
import generateAiImage from './utils/generateAiImage';

const App = () => {
  const [step, setStep] = useState<Step>(STEP.START);
  const [cardType, setCardType] = useState<CardType | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<userInfoFormType | null>(null);

  const [imageUrls, setImageUrls] = useState<ConvertImagePrompt[]>([]);

  const [aiConvertImage, setAiConvertImage] = useState<string[]>([]);

  const convertSingleImage = async (imageUrl: string, prompt: PromptType) => {
    const newImageUrl = await generateAiImage({ imageUrl, selectedPrompt: prompt });
    setAiConvertImage((prev) => [...prev, newImageUrl]);
  };

  const convertAllImages = async () => {
    await Promise.all(imageUrls.map((x) => convertSingleImage(x.img, x.prompt!)));
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
