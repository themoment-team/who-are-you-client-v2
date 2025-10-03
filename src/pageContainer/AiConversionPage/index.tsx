import { STEP, type Step } from '../../types';

interface AiConversionPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const AiConversionPage = ({ setStep }: AiConversionPageProps) => {
  return (
    <div>
      <h1>AI Conversion Page</h1>
      <button onClick={() => setStep(STEP.INFO_INPUT)}>Go to Info Input</button>
      <button onClick={() => setStep(STEP.CAMERA)}>Go to Camera</button>
    </div>
  );
};

export default AiConversionPage;
