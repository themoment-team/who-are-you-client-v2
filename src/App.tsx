import { useState } from 'react';

import { Provider } from './lib';
import {
  AiConversionPage,
  CameraPage,
  InfoInputPage,
  StartPage,
  ThemeSelectPage,
} from './pageContainer';
import { type CardType, type PromptType, STEP, type Step } from './types';
import { postConvertImage } from './utils';

const App = () => {
  const [step, setStep] = useState<Step>(STEP.START);
  const [cardType, setCardType] = useState<CardType | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState<string>('');

  const [selectedPrompt, setSelectedPrompt] = useState<PromptType>(null);

  const AiImageConvert = async (img: string) => {
    const newImageUrl = await postConvertImage(img, selectedPrompt);
    setImageUrl(newImageUrl);
  };

  const handleAiConvert = () => {
    // imageUrl.map((x) => AiImageConvert(x));
  };

  return (
    <Provider>
      <div className="flex h-screen items-center justify-center bg-[#f8f8f8]">
        {step === STEP.START && <StartPage setStep={setStep} setCardType={setCardType} />}
        {step === STEP.CAMERA && <CameraPage setStep={setStep} setImageUrl={setImageUrl} />}
        {step === STEP.AI_CONVERSION && (
          <AiConversionPage
            setStep={setStep}
            cardType={cardType}
            selectedPrompt={selectedPrompt}
            setSelectedPrompt={setSelectedPrompt}
            handleAiConvert={handleAiConvert}
          />
        )}
        {step === STEP.INFO_INPUT && <InfoInputPage setStep={setStep} />}
        {step === STEP.THEME_SELECT && <ThemeSelectPage setStep={setStep} cardType={cardType} />}
      </div>
    </Provider>
  );
};

export default App;
