import { useState } from 'react';

import { AiConvertExampleCard, StepButton } from '..';
import type { ConvertImagePrompt, PromptType } from '../../types';

interface PromptSelectModal {
  isModalOpen: boolean;
  setIsAiConvert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageUrls: ConvertImagePrompt[];
  setImageUrls: React.Dispatch<React.SetStateAction<ConvertImagePrompt[]>>;
}

interface PromptOptionType {
  promptName: PromptType;
  previewImageUrl: string;
}

const PromptSelectModal = ({
  isModalOpen,
  setIsAiConvert,
  setIsModalOpen,
  imageUrls,
  setImageUrls,
}: PromptSelectModal) => {
  const [currentImage, setCurrentImage] = useState<string>(imageUrls[0].imageUrl);
  const promptOptions: PromptOptionType[] = [
    { promptName: '디즈니', previewImageUrl: '/images/디즈니.png' },
    { promptName: '레고', previewImageUrl: '/images/레고.png' },
    { promptName: '마인크래프트', previewImageUrl: '/images/마인크래프트.png' },
    { promptName: '스누피', previewImageUrl: '/images/스누피.png' },
    { promptName: '심슨', previewImageUrl: '/images/심슨.png' },
  ];

  const isBusinessCard = imageUrls.length === 1;

  return (
    <div
      className={`absolute inset-0 z-10 h-full w-full rounded-3xl bg-[rgba(0,0,0,0.25)] ${isModalOpen ? 'block' : 'hidden'}`}
    >
      <div
        className={`absolute right-0 bottom-0 left-0 flex flex-col gap-9 rounded-3xl bg-white px-12 pt-12 pb-10 ${isBusinessCard ? 'h-[30.625rem]' : 'h-[55.3125rem]'}`}
      >
        {!isBusinessCard && (
          <>
            <div className="flex h-28 flex-col gap-4">
              <h1 className="text-4xl leading-none font-extrabold text-[#222]">
                AI로 변환시킬 사진 선택
              </h1>
              <p className="text-xl leading-[150%] font-medium text-[#666]">
                AI로 변환시킬 사진을 선택해주세요.
              </p>
            </div>
            <div className="flex gap-4">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={imageUrl.imageUrl}
                  className={`${currentImage === imageUrl.imageUrl && 'h-[12.8125rem] w-[10.25rem] rounded-xl border border-solid'} relative flex cursor-pointer items-center justify-center`}
                  onClick={() => setCurrentImage(imageUrl.imageUrl)}
                >
                  <img
                    src={imageUrl.imageUrl}
                    className={`rounded-xl ${currentImage === imageUrl.imageUrl ? 'h-[12.0625rem] w-[9.625rem]' : 'h-[12.8125rem] w-[10.25rem]'}`}
                    alt={`${index}째 사진`}
                  />
                  {imageUrl.promptName !== null && (
                    <div
                      className={`absolute ${currentImage === imageUrl.imageUrl ? 'h-[12.0625rem] w-[9.625rem]' : 'h-[12.8125rem] w-[10.25rem]'} flex flex-col items-center justify-center rounded-xl bg-black/30`}
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
            <div className="border-b border-solid border-[#666]" />
          </>
        )}

        <div className="flex h-28 flex-col gap-4">
          <h1 className="text-4xl leading-none font-extrabold text-[#222]">AI 변환 키워드 선택</h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            AI 변환 키워드를 선택해주세요.
            <br />
            선택한 키워드로 아래 사진과 같은 스타일로 변환됩니다.
          </p>
        </div>

        <div className="flex gap-4">
          {promptOptions.map(({ promptName, previewImageUrl }) => (
            <AiConvertExampleCard
              key={promptName}
              promptName={promptName}
              previewImageUrl={previewImageUrl}
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
              currentImage={currentImage}
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
                setImageUrls((prev) => prev.map((item) => ({ ...item, promptName: null })));
              }}
            >
              AI로 변환하지 않을래요
            </StepButton>
            <StepButton
              variant="next"
              onClick={() => {
                if (!imageUrls.some((x) => x.promptName === null)) setIsModalOpen(false);
              }}
            >
              확인
            </StepButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSelectModal;
