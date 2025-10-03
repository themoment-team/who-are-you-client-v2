import { STEP, type Step } from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const ThemeSelectPage = ({ setStep }: ThemeSelectPageProps) => {
  return (
    <div>
      <h1>Theme Select Page</h1>
      <button onClick={() => setStep(STEP.INFO_INPUT)}>Go to Info Input</button>
    </div>
  );
};

export default ThemeSelectPage;
