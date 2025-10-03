import { STEP, type Step } from '../../types';

interface InfoInputPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const InfoInputPage = ({ setStep }: InfoInputPageProps) => {
  return (
    <div>
      <h1>Info Input Page</h1>
      <button onClick={() => setStep(STEP.THEME_SELECT)}>Go to Theme Select</button>
      <button onClick={() => setStep(STEP.AI_CONVERSION)}>Go to AI Conversion</button>
    </div>
  );
};

export default InfoInputPage;
