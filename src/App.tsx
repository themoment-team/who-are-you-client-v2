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
    <div className="h-screen bg-[#f8f8f8]">
      {step === STEP.START && <StartPage />}
      {step === STEP.CAMERA && <CameraPage />}
      {step === STEP.AI_CONVERSION && <AiConversionPage />}
      {step === STEP.INFO_INPUT && <InfoInputPage />}
      {step === STEP.THEME_SELECT && <ThemeSelectPage />}
    </div>
  );
};

export default App;
