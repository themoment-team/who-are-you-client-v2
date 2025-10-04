import { STEP, type Step } from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const ThemeSelectPage = ({ setStep }: ThemeSelectPageProps) => {
  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <h1>Theme Select Page</h1>
      <div className="inline-flex flex-col">
        <button onClick={() => setStep(STEP.INFO_INPUT)}>Go to Info Input(이전으로)</button>
      </div>
    </div>
  );
};

export default ThemeSelectPage;
