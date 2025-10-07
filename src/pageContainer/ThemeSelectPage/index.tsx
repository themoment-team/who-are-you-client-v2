import { Arrow, Dot } from '../../assets';
import { STEP, type Step } from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const ThemeSelectPage = ({ setStep }: ThemeSelectPageProps) => {
  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <div className="mb-[6.875rem] flex flex-col gap-4">
        <h1 className="text-[2.25rem]/[2.25rem] font-black">명함 테마 선택</h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          인쇄하실 명함의 테마를 선택해주세요.
          <br />
          명함에 들어간 사진을 바꾸고 싶다면 사진을 클릭해주세요.
        </p>
      </div>
      <div className="mb-[3rem] flex items-center justify-between px-[3.25rem]">
        <Arrow />
        <div className="h-[11.8125rem] w-[21.25rem] rounded-lg bg-white shadow-[0_2px_6px_0_rgba(209,209,209,0.25)]"></div>
        <Arrow flip />
      </div>
      <div className="mb-[3rem] flex justify-center gap-4">
        <Dot active />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <div className="flex items-center justify-end gap-6">
        <button
          className="underline-offset-from decoration-skip-ink-none text-[1.25rem]/[1.875rem] font-medium text-[#888] underline [text-underline-position:from-font]"
          onClick={() => setStep(STEP.INFO_INPUT)}
        >
          이전으로
        </button>
        <button className="rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] font-medium text-[#222]">
          인쇄하기
        </button>
      </div>
    </div>
  );
};

export default ThemeSelectPage;
