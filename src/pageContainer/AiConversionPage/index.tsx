import { useEffect, useState } from 'react';

import { Plus } from '../../assets';
import { AiConvertExampleCard, RadioToggle, StepButton } from '../../components';
import { type CardType, STEP, type Step } from '../../types';
import type { PromptType } from '../../types/prompt';

interface AiConversionPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  cardType: CardType | undefined;
  imgs: string[];
}

interface convertExampleImagesType {
  title: PromptType;
  img: string;
}

const AiConversionPage = ({ setStep, cardType, imgs }: AiConversionPageProps) => {
  const [isAiConvert, setIsAiConvert] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedPrompt, setSelectedPrompt] = useState<PromptType>(null);

  const convertExampleImages: convertExampleImagesType[] = [
    { title: '디즈니', img: '/images/디즈니.png' },
    { title: '레고', img: '/images/레고.png' },
    { title: '마인크래프트', img: '/images/마인크래프트.png' },
    { title: '스누피', img: '/images/스누피.png' },
    { title: '심슨', img: '/images/심슨.png' },
  ];

  useEffect(() => {
    if (isAiConvert) setIsModalOpen(isAiConvert);
    else setSelectedPrompt(null);
  }, [isAiConvert, setIsModalOpen]);

  return (
    <div className="relative h-[61.5rem] w-[50rem]">
      <div className="flex h-full w-full flex-col rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
        <div className="flex flex-col gap-4 pt-8">
          <h1 className="text-4xl leading-none font-extrabold">AI 변환 여부 선택</h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            사진의 AI 변환 여부를 선택합니다.
            <br /> 선택한 키워드로 사진을 변환시킬 수 있습니다.
          </p>
        </div>

        <div
          className={`flex w-full items-center ${imgs.length === 1 ? 'justify-center' : 'justify-between'} pt-[2.25rem]`}
        >
          {imgs.map((x) => (
            <img
              key={x}
              src={x}
              className={`${imgs.length === 1 ? 'h-[18.75rem] w-[18.75rem]' : 'h-[10.25rem] w-[10.25rem]'} rounded-md`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-[3.09rem] pb-8">
          <div className="flex items-center gap-9">
            <p className="text-xl leading-[150%] font-bold text-black">AI 변환</p>
            <RadioToggle isTrue={isAiConvert} setIsTrue={setIsAiConvert} />
          </div>
          {selectedPrompt && (
            <div className="flex gap-9">
              <p className="text-xl leading-[150%] font-bold text-black">AI 변환 키워드 </p>
              <div className="flex items-center gap-[0.88rem]">
                <div className="flex items-center justify-center rounded-[0.625rem] border border-solid px-4 py-1">
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
              onClick={() =>
                cardType === 'BUSINESS_CARD' ? setStep(STEP.INFO_INPUT) : setStep(STEP.THEME_SELECT)
              }
            >
              다음으로
            </StepButton>
          </div>
        </div>
      </div>

      {/* 프롬프트 선택 */}
      <div
        className={`absolute inset-0 z-10 h-full w-full rounded-3xl bg-[rgba(0,0,0,0.25)] ${isModalOpen ? 'block' : 'hidden'}`}
      >
        <div className="absolute right-0 bottom-0 left-0 flex h-[30.625rem] flex-col gap-9 rounded-3xl bg-white px-12 pt-12 pb-10">
          <div className="flex h-28 flex-col gap-4">
            <h1 className="text-4xl leading-none font-extrabold">AI 변환 키워드 선택</h1>
            <p className="text-xl leading-[150%] font-medium text-[#666]">
              AI 변환 키워드를 선택해주세요.
              <br />
              선택한 키워드로 아래 사진과 같은 스타일로 변환됩니다.
            </p>
          </div>

          <div className="flex gap-4">
            {convertExampleImages.map((x) => (
              <AiConvertExampleCard
                key={x.title}
                title={x.title}
                img={x.img}
                selectedPrompt={selectedPrompt}
                setSelectedPrompt={setSelectedPrompt}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <div className="flex gap-6">
              <StepButton
                variant="back"
                onClick={() => {
                  setIsAiConvert(false);
                  setIsModalOpen(false);
                }}
              >
                AI로 변환하지 않을래요
              </StepButton>
              <StepButton variant="next" onClick={() => setIsModalOpen(false)}>
                확인
              </StepButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConversionPage;
