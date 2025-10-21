import { useState } from 'react';

import { Provider } from './lib';
import {
  AiConversionPage,
  CameraPage,
  InfoInputPage,
  StartPage,
  ThemeSelectPage,
} from './pageContainer';

import { postConvertImage } from './utils';
import { type CardType, STEP, type Step, type userInfoFormType, type PromptType } from './types';


const App = () => {
  const [step, setStep] = useState<Step>(STEP.START);
  const [cardType, setCardType] = useState<CardType | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<userInfoFormType | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [aiConvertImage, setAiConvertImage] = useState<string[]>([]);

  const [selectedPrompt, setSelectedPrompt] = useState<PromptType>(null);

  const AiImageConvert = async (img: string) => {
    const newImageUrl = await postConvertImage(img, selectedPrompt);
    setAiConvertImage((prv) => [...prv, newImageUrl]);
  };

  const handleAiConvert = () => {
    imageUrls.map((x) => AiImageConvert(x));
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
            cardType={cardType}
            selectedPrompt={selectedPrompt}
            setSelectedPrompt={setSelectedPrompt}
            handleAiConvert={handleAiConvert}
            imgs={imageUrls}
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
