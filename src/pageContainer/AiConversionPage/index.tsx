import { useEffect, useState } from 'react';

import { Plus } from '../../assets';
import { PromptSelectModal, StepButton, Switch } from '../../components';
import { type CardType, type ConvertImagePrompt, STEP, type Step } from '../../types';

interface AiConversionPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
  imageUrls: ConvertImagePrompt[];
  setImageUrls: React.Dispatch<React.SetStateAction<ConvertImagePrompt[]>>;
  convertAllImages: () => void;
  hasAiConvertedOnce: boolean;
  setHasAiConvertedOnce: React.Dispatch<React.SetStateAction<boolean>>;
  isAiConvert: boolean;
  setIsAiConvert: React.Dispatch<React.SetStateAction<boolean>>;
}

const AiConversionPage = ({
  setStep,
  cardType,
  imageUrls,
  setImageUrls,
  convertAllImages,
  hasAiConvertedOnce,
  setHasAiConvertedOnce,
  isAiConvert,
  setIsAiConvert,
}: AiConversionPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isAiConvert) setIsModalOpen(isAiConvert);
  }, [isAiConvert, setIsModalOpen]);

  return (
    <div className="relative h-[61.5rem] w-[50rem]">
      <div className="flex h-full w-full flex-col rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl leading-none font-[600] text-[#222]">AI 변환 여부 선택</h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            사진의 AI 변환 여부를 선택합니다.
            <br /> 선택한 키워드로 사진을 변환시킬 수 있습니다.
          </p>
        </div>

        <div
          className={`flex w-full items-center ${imageUrls.length === 1 ? 'justify-center' : 'justify-between'} pt-[2.25rem]`}
          onClick={isAiConvert ? () => setIsModalOpen(true) : undefined}
        >
          {imageUrls.map((imageUrl) => (
            <div key={imageUrl.imageUrl} className="relative cursor-pointer">
              <img
                src={imageUrl.imageUrl}
                className={`${imageUrls.length === 1 ? 'h-[18.75rem] w-[18.75rem]' : 'h-[12.8125rem] w-[10.25rem]'} rounded-xl`}
                alt={`${imageUrl.promptName} 변환`}
              />
              {imageUrl.promptName !== null && cardType === 'FOUR_CUT' && (
                <div
                  className={`absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/30`}
                >
                  <p className="text-[1.25rem] leading-[150%] font-semibold text-[#F6F6F6]">
                    AI 변환 키워드:
                  </p>
                  <p className="text-[1.25rem] leading-[150%] font-semibold text-[#F6F6F6]">
                    {imageUrl.promptName}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-[3.09rem] pb-8">
          <div className="flex items-center gap-9">
            <p className="text-xl leading-[150%] font-bold text-black">AI 변환</p>
            <Switch
              isAiConvert={isAiConvert}
              setIsAiConvert={setIsAiConvert}
              setImageUrls={setImageUrls}
            />
          </div>
          {imageUrls[0].promptName && cardType === 'BUSINESS_CARD' && (
            <div className="flex gap-9">
              <p className="text-xl leading-[150%] font-bold text-black">AI 변환 키워드 </p>
              <div className="flex items-center gap-[0.88rem]">
                <div className="flex items-center justify-center rounded-[0.625rem] border border-solid px-4 py-1 text-[#222]">
                  {imageUrls[0].promptName}
                </div>
                <div className="rotate-45 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                  <Plus width={'0.625rem'} height={'0.625rem'} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <div className="flex gap-6">
            <StepButton variant="back" onClick={() => setStep(STEP.CAMERA)}>
              사진 재촬영
            </StepButton>
            <StepButton
              variant="next"
              onClick={() => {
                if (cardType === 'BUSINESS_CARD') setStep(STEP.INFO_INPUT);
                else setStep(STEP.THEME_SELECT);

                if (imageUrls[0].promptName !== null && !hasAiConvertedOnce) {
                  setHasAiConvertedOnce(true);
                  convertAllImages();
                }
              }}
            >
              다음으로
            </StepButton>
          </div>
        </div>
      </div>

      {/* 프롬프트 선택 */}
      <PromptSelectModal
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        isModalOpen={isModalOpen}
        setIsAiConvert={setIsAiConvert}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default AiConversionPage;
