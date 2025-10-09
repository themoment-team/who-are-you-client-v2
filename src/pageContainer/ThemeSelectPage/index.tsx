import { useState } from 'react';

import { Arrow, Dot } from '../../assets';
import {
  BusinessCardTheme1,
  BusinessCardTheme2,
  BusinessCardTheme3,
  BusinessCardTheme4,
  FourCutTheme1,
  FourCutTheme2,
  FourCutTheme3,
  FourCutTheme4,
  FourCutTheme5,
  FourCutTheme6,
  FourCutTheme7,
} from '../../components';
import { type CardType, STEP, type Step } from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
}

const ThemeSelectPage = ({ setStep, cardType }: ThemeSelectPageProps) => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const themes =
    cardType === 'BUSINESS_CARD'
      ? [BusinessCardTheme1, BusinessCardTheme2, BusinessCardTheme3, BusinessCardTheme4]
      : [
          FourCutTheme1,
          FourCutTheme2,
          FourCutTheme3,
          FourCutTheme4,
          FourCutTheme5,
          FourCutTheme6,
          FourCutTheme7,
        ];

  const CurrentThemeComponent = themes[currentTheme];

  const handlePrevTheme = () => {
    setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const handleNextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <div
        className={`${
          cardType === 'BUSINESS_CARD' && currentTheme > 1
            ? 'mb-[2.1563rem]'
            : cardType === 'FOUR_CUT'
              ? 'mb-[3rem]'
              : 'mb-[6.875rem]'
        } flex flex-col gap-4`}
      >
        <h1 className="text-[2.25rem]/[2.25rem] font-black">
          {cardType === 'BUSINESS_CARD' ? '명함' : '인생네컷'} 테마 선택
        </h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          인쇄하실 {cardType === 'BUSINESS_CARD' ? '명함' : '인생네컷'}의 테마를 선택해주세요.
          <br />
          {cardType === 'BUSINESS_CARD'
            ? '명함에 들어간 사진을 바꾸고 싶다면 사진을 클릭해주세요.'
            : '사진을 선택해서 교체할 수도 있어요.'}
        </p>
      </div>
      <div
        className={`${
          (cardType === 'BUSINESS_CARD' && currentTheme > 1) || cardType === 'FOUR_CUT'
            ? 'mb-[2.25rem]'
            : 'mb-[3rem]'
        } flex items-center justify-between px-[3.25rem]`}
      >
        <button onClick={handlePrevTheme}>
          <Arrow />
        </button>
        <CurrentThemeComponent />
        <button onClick={handleNextTheme}>
          <Arrow flip />
        </button>
      </div>
      <div className="mb-[3rem] flex justify-center gap-4">
        {themes.map((_, index) => (
          <Dot key={index} active={index === currentTheme} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-6">
        <button
          className="underline-offset-from decoration-skip-ink-none cursor-pointer text-[1.25rem]/[1.875rem] font-medium text-[#888] underline [text-underline-position:from-font]"
          onClick={() => setStep(STEP.INFO_INPUT)}
        >
          이전으로
        </button>
        <button className="cursor-pointer rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] font-medium text-[#222]">
          인쇄하기
        </button>
      </div>
    </div>
  );
};

export default ThemeSelectPage;
