import { useEffect, useState } from 'react';

import { Plus } from '../../assets';
import { PromptSelectModal, StepButton, Switch } from '../../components';
import { type CardType, STEP, type Step } from '../../types';
import type { PromptType } from '../../types/prompt';

interface AiConversionPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
  imageUrls: string[];
  selectedPrompt: PromptType;
  setSelectedPrompt: React.Dispatch<React.SetStateAction<PromptType>>;
  handleAiConvert: () => void;
}

const AiConversionPage = ({
  setStep,
  cardType,
  imageUrls,
  selectedPrompt,
  setSelectedPrompt,
  handleAiConvert,
}: AiConversionPageProps) => {
  const [isAiConvert, setIsAiConvert] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isAiConvert) setIsModalOpen(isAiConvert);
    else setSelectedPrompt(null);
  }, [isAiConvert, setIsModalOpen, setSelectedPrompt]);

  return (
    <div className="relative h-[61.5rem] w-[50rem]">
      <div className="flex h-full w-full flex-col rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
        <div className="flex flex-col gap-4 pt-8">
          <h1 className="text-4xl leading-none font-extrabold text-[#222]">AI 변환 여부 선택</h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            사진의 AI 변환 여부를 선택합니다.
            <br /> 선택한 키워드로 사진을 변환시킬 수 있습니다.
          </p>
        </div>

        <div
          className={`flex w-full items-center ${imageUrls.length === 1 ? 'justify-center' : 'justify-between'} pt-[2.25rem]`}
        >
          {imageUrls.map((x) => (
            <img
              key={x}
              src={x}
              className={`${imageUrls.length === 1 ? 'h-[18.75rem] w-[18.75rem]' : 'h-[12.8125rem] w-[10.25rem]'} rounded-md`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-[3.09rem] pb-8">
          <div className="flex items-center gap-9">
            <p className="text-xl leading-[150%] font-bold text-black">AI 변환</p>
            <Switch isTrue={isAiConvert} setIsTrue={setIsAiConvert} />
          </div>
          {selectedPrompt && (
            <div className="flex gap-9">
              <p className="text-xl leading-[150%] font-bold text-black">AI 변환 키워드 </p>
              <div className="flex items-center gap-[0.88rem]">
                <div className="flex items-center justify-center rounded-[0.625rem] border border-solid px-4 py-1 text-[#222]">
                  {selectedPrompt}
                </div>
                <div className="rotate-45" onClick={() => setIsModalOpen(true)}>
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

                handleAiConvert();
              }}
            >
              다음으로
            </StepButton>
          </div>
        </div>
      </div>
      {/* 프롬프트 선택 */}
      <PromptSelectModal
        isModalOpen={isModalOpen}
        selectedPrompt={selectedPrompt}
        setSelectedPrompt={setSelectedPrompt}
        setIsAiConvert={setIsAiConvert}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default AiConversionPage;
