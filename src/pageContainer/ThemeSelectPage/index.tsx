import React, { useRef, useState } from 'react';

import { useReactToPrint } from 'react-to-print';

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
  PhotoReselectModal,
} from '../../components';
import {
  type BusinessCardProps,
  type CardType,
  type FourCutProps,
  STEP,
  type Step,
} from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
}

const ThemeSelectPage = ({ setStep, cardType }: ThemeSelectPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const isBusinessCard = cardType === 'BUSINESS_CARD';
  const isFourCut = cardType === 'FOUR_CUT';
  const PORTRAIT_THEME_MAX_INDEX = 2;
  const isPortraitBusinessCard = isBusinessCard && currentTheme < PORTRAIT_THEME_MAX_INDEX; // 가로 명함
  const isLandscapeBusinessCard = isBusinessCard && currentTheme >= PORTRAIT_THEME_MAX_INDEX; // 세로 명함
  const cardTypeLabel = isBusinessCard ? '명함' : '인생네컷';

  const pageStyle = isBusinessCard
    ? isPortraitBusinessCard
      ? '@page {size: portrait;}'
      : '@page {size: landscape;}'
    : '@page {size: portrait;}';

  const reactToPrintFn = useReactToPrint({ contentRef, pageStyle });

  const themes = isBusinessCard
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

  const CurrentThemeComponent = themes[currentTheme] as React.FC<BusinessCardProps | FourCutProps>;

  const businessCardData: BusinessCardProps = {
    name: '홍길동',
    major: 'UI/UX Designer',
    email: 'honggildong@gmail.com',
    tel: '010-1234-5678',
    imageSrc: '/images/example.jpg',
    onImageClick: () => setIsModalOpen(true),
  };

  const fourCutData: FourCutProps = {
    imageSrcs: [
      '/images/example.jpg',
      '/images/example.jpg',
      '/images/example.jpg',
      '/images/example.jpg',
    ],
    onImageClick: () => setIsModalOpen(true),
  };

  const handlePrevTheme = () => {
    setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const handleNextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <div className="relative h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      {isModalOpen && (
        <PhotoReselectModal cardType={cardType} onClose={() => setIsModalOpen(false)} />
      )}
      <div
        className={`${
          isLandscapeBusinessCard ? 'mb-[2.1563rem]' : isFourCut ? 'mb-[3rem]' : 'mb-[6.875rem]'
        } flex flex-col gap-4`}
      >
        <h1 className="text-[2.25rem]/[2.25rem] font-black text-[#222]">
          {cardTypeLabel} 테마 선택
        </h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          인쇄하실 {cardTypeLabel}의 테마를 선택해주세요.
          <br />
          {isBusinessCard
            ? '명함에 들어간 사진을 바꾸고 싶다면 사진을 클릭해주세요.'
            : '사진을 선택해서 교체할 수도 있어요.'}
        </p>
      </div>
      <div
        className={`${
          isLandscapeBusinessCard || isFourCut ? 'mb-[2.25rem]' : 'mb-[3rem]'
        } flex items-center justify-between px-[3.25rem]`}
      >
        <button onClick={handlePrevTheme}>
          <Arrow />
        </button>
        <div
          ref={contentRef}
          className={`printable flex items-center gap-4 ${isPortraitBusinessCard ? 'print:flex-col print:pt-4' : 'print:pt-4 print:pl-4'}`}
        >
          {isBusinessCard ? (
            <CurrentThemeComponent {...businessCardData} />
          ) : (
            <CurrentThemeComponent {...fourCutData} />
          )}
          {isBusinessCard && (
            <div className="hidden print:block">
              <CurrentThemeComponent {...businessCardData} />
            </div>
          )}
        </div>
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
          className="decoration-skip-ink-none cursor-pointer text-[1.25rem]/[1.875rem] font-medium text-[#888] underline [text-underline-position:from-font]"
          onClick={() => setStep(STEP.INFO_INPUT)}
        >
          이전으로
        </button>
        <button
          className="cursor-pointer rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] font-medium text-[#222]"
          onClick={reactToPrintFn}
        >
          인쇄하기
        </button>
      </div>
    </div>
  );
};

export default ThemeSelectPage;
