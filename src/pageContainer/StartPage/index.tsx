import { StepButton } from '../../components';
import { type CardType, STEP, type Step } from '../../types';

interface StartPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  setCardType: React.Dispatch<React.SetStateAction<CardType | undefined>>;
}

const StartPage = ({ setStep, setCardType }: StartPageProps) => {
  const handleBusinessCardClick = () => {
    setStep(STEP.CAMERA);
    setCardType('BUSINESS_CARD');
  };

  const handleFourCutClick = () => {
    setStep(STEP.CAMERA);
    setCardType('FOUR_CUT');
  };

  return (
    <div className="flex h-[61.5rem] w-[50rem] flex-col gap-[11.25rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] pt-[17.5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <div className="flex flex-col gap-4">
        <h1 className="text-[4rem]/[4rem] font-black text-[#222]">WHO ARE YOU</h1>
        <p className="text-[1.25rem]/[1.75rem] font-medium text-[#666]">
          AI 기술을 통해 변환된 사진으로 명함과 인생네컷을 제작할 수 있는
          <br />
          체험형 서비스입니다. 손쉽게 나만의 AI 작업물을 완성해보세요!
        </p>
      </div>

      <div className="flex justify-end gap-5">
        <StepButton variant="next" onClick={handleBusinessCardClick}>
          명함 만들기
        </StepButton>
        <StepButton variant="next" onClick={handleFourCutClick}>
          인생네컷 찍기
        </StepButton>
      </div>
    </div>
  );
};

export default StartPage;
