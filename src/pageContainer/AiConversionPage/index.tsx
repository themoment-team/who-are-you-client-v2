import { STEP, type Step } from '../../types';

interface AiConversionPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const AiConversionPage = ({ setStep }: AiConversionPageProps) => {
  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <h1>AI Conversion Page</h1>
      <div className="inline-flex flex-col">
        <button onClick={() => setStep(STEP.INFO_INPUT)}>Go to Info Input(다음으로)</button>
        <button onClick={() => setStep(STEP.CAMERA)}>Go to Camera(이전으로)</button>
      </div>
    </div>
  );
};

export default AiConversionPage;
