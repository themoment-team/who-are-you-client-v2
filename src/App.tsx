import { useState } from 'react';

import {
  AiConversionPage,
  CameraPage,
  InfoInputPage,
  StartPage,
  ThemeSelectPage,
} from './pageContainer';
import { STEP, type Step } from './types';

const App = () => {
  const [step, setStep] = useState<Step>(STEP.START);

  return (
    <div className="flex h-screen items-center justify-center bg-[#f8f8f8]">
      {step === STEP.START && <StartPage setStep={setStep} />}
      {step === STEP.CAMERA && <CameraPage setStep={setStep} />}
      {step === STEP.AI_CONVERSION && <AiConversionPage setStep={setStep} />}
      {step === STEP.INFO_INPUT && <InfoInputPage setStep={setStep} />}
      {step === STEP.THEME_SELECT && <ThemeSelectPage setStep={setStep} />}
    </div>
  );
};

export default App;
