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
  PhotoReselectModal,
  StepButton,
} from '../../components';
import {
  type BusinessCardProps,
  type CardType,
  type ConvertImagePrompt,
  type FourCutProps,
  type PromptType,
  STEP,
  type Step,
  type userInfoFormType,
} from '../../types';

interface ThemeSelectPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
  userInfo: userInfoFormType | null;
  imageUrls: ConvertImagePrompt[];
  aiConvertImage: string[];
  setAiConvertImage: React.Dispatch<React.SetStateAction<string[]>>;
  aiConvertHistory: string[][];
  setAiConvertHistory: React.Dispatch<React.SetStateAction<string[][]>>;
  isAiConvert: boolean;
  convertSingleImage: (imageUrl: string, selectedPrompt: PromptType) => Promise<string>;
  isAiConverting: boolean;
  convertingIndices: Set<number>;
  setConvertingIndices: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ThemeSelectPage = ({
  setStep,
  cardType,
  userInfo,
  imageUrls,
  aiConvertImage,
  setAiConvertImage,
  aiConvertHistory,
  setAiConvertHistory,
  isAiConvert,
  convertSingleImage,
  isAiConverting,
  convertingIndices,
  setConvertingIndices,
}: ThemeSelectPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [currentTheme, setCurrentTheme] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const isBusinessCard = cardType === 'BUSINESS_CARD';
  const isFourCut = cardType === 'FOUR_CUT';
  const cardTypeLabel = isBusinessCard ? '명함' : '인생네컷';

  const PORTRAIT_THEME_MAX_INDEX = 2;
  const themes = isBusinessCard
    ? [BusinessCardTheme1, BusinessCardTheme2, BusinessCardTheme3, BusinessCardTheme4]
    : [FourCutTheme1, FourCutTheme2, FourCutTheme3, FourCutTheme4, FourCutTheme5, FourCutTheme6];
  const CurrentThemeComponent = themes[currentTheme] as React.FC<BusinessCardProps | FourCutProps>;

  const isPortraitBusinessCard = isBusinessCard && currentTheme < PORTRAIT_THEME_MAX_INDEX;
  const isLandscapeBusinessCard = isBusinessCard && currentTheme >= PORTRAIT_THEME_MAX_INDEX;

  const pageStyle = isBusinessCard
    ? isPortraitBusinessCard
      ? '@page {size: portrait;}'
      : '@page {size: landscape;}'
    : '@page {size: portrait;}';
  const reactToPrintFn = useReactToPrint({ contentRef, pageStyle });

  const displayImageUrls = isAiConvert
    ? imageUrls.map((_, index) => {
        if (convertingIndices.has(index)) {
          return '/images/example.png';
        }
        return aiConvertImage[index] || '/images/example.png';
      })
    : imageUrls.map((x) => x.imageUrl);

  const handleImageClick = (index: number = 0) => {
    if (isAiConvert && !convertingIndices.has(index)) {
      setSelectedImageIndex(index);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePrevTheme = () => {
    setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const handleNextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const handlePreviousStep = () => {
    if (isBusinessCard) {
      setStep(STEP.INFO_INPUT);
    } else {
      setStep(STEP.AI_CONVERSION);
    }
  };

  const businessCardData: BusinessCardProps = {
    name: userInfo?.name || '',
    major: userInfo?.major || '',
    email: userInfo?.email || '',
    tel: userInfo?.tel || '',
    imageUrl: displayImageUrls[0] || '',
    onImageClick: () => handleImageClick(0),
    isClickable: isAiConvert && !convertingIndices.has(0),
  };

  const fourCutData: FourCutProps = {
    imageUrls: displayImageUrls.slice(0, 4),
    onImageClick: handleImageClick,
    isClickable: isAiConvert,
    convertingIndices,
  };

  return (
    <div className="relative h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      {isModalOpen && (
        <PhotoReselectModal
          cardType={cardType}
          selectedImageIndex={selectedImageIndex}
          imageUrls={imageUrls}
          aiConvertImage={aiConvertImage}
          setAiConvertImage={setAiConvertImage}
          aiConvertHistory={aiConvertHistory}
          setAiConvertHistory={setAiConvertHistory}
          isAiConvert={isAiConvert}
          convertSingleImage={convertSingleImage}
          isAiConverting={isAiConverting}
          setConvertingIndices={setConvertingIndices}
          onClose={handleModalClose}
        />
      )}
      <div
        className={`${
          isLandscapeBusinessCard ? 'mb-[2.1563rem]' : isFourCut ? 'mb-[2.25rem]' : 'mb-[6.875rem]'
        } flex flex-col gap-4`}
      >
        <h1 className="text-[2.25rem]/[2.25rem] font-semibold text-[#222]">
          {cardTypeLabel} 테마 선택
        </h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          인쇄하실 {cardTypeLabel}의 테마를 선택해주세요.
          {isAiConvert && (
            <>
              <br />
              {isBusinessCard
                ? '명함에 들어간 사진을 바꾸고 싶다면 사진을 클릭해주세요.'
                : '사진을 선택해서 교체할 수도 있어요.'}
            </>
          )}
        </p>
      </div>
      <div
        className={`${
          isLandscapeBusinessCard || isFourCut ? 'mb-[2.25rem]' : 'mb-[3rem]'
        } flex items-center justify-between px-[3.25rem]`}
      >
        <button onClick={handlePrevTheme} aria-label="이전 테마">
          <Arrow />
        </button>
        <div
          ref={contentRef}
          className={`printable flex items-center justify-center gap-4 ${isBusinessCard ? 'p-4' : ''} ${isPortraitBusinessCard ? 'print:flex-col' : ''}`}
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
        <button onClick={handleNextTheme} aria-label="다음 테마">
          <Arrow flip />
        </button>
      </div>
      <div className={`${isFourCut ? 'mb-[2.25rem]' : 'mb-[3rem]'} flex justify-center gap-4`}>
        {themes.map((_, index) => (
          <Dot key={index} active={index === currentTheme} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-6">
        <StepButton variant="back" onClick={handlePreviousStep}>
          이전으로
        </StepButton>
        <StepButton variant="next" onClick={reactToPrintFn}>
          인쇄하기
        </StepButton>
      </div>
    </div>
  );
};

export default ThemeSelectPage;
