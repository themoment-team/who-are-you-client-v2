import { STEP, type Step } from '../../types';

interface CameraPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const CameraPage = ({ setStep }: CameraPageProps) => {
  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <h1>Camera Page</h1>
      <div className="inline-flex flex-col">
        <button onClick={() => setStep(STEP.AI_CONVERSION)}>Go to AI Conversion(다음으로)</button>
      </div>
    </div>
  );
};

export default CameraPage;
