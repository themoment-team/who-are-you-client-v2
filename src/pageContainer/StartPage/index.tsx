import { STEP, type Step } from '../../types';

interface StartPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const StartPage = ({ setStep }: StartPageProps) => {
  return (
    <div>
      <h1>Start Page</h1>
      <button onClick={() => setStep(STEP.CAMERA)}>Go to Camera</button>
    </div>
  );
};

export default StartPage;
