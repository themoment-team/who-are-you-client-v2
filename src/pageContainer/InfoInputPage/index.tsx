import { STEP, type Step } from '../../types';

interface InfoInputPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const InfoInputPage = ({ setStep }: InfoInputPageProps) => {
  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <h1>Info Input Page</h1>
      <div className="inline-flex flex-col">
        <button onClick={() => setStep(STEP.THEME_SELECT)}>Go to Theme Select(다음으로)</button>
        <button onClick={() => setStep(STEP.AI_CONVERSION)}>Go to AI Conversion(이전으로)</button>
      </div>
    </div>
  );
};

export default InfoInputPage;
