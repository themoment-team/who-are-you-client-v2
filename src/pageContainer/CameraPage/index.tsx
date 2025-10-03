import { STEP, type Step } from '../../types';

interface CameraPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const CameraPage = ({ setStep }: CameraPageProps) => {
  return (
    <div>
      <h1>Camera Page</h1>
      <button onClick={() => setStep(STEP.AI_CONVERSION)}>Go to AI Conversion</button>
    </div>
  );
};

export default CameraPage;
