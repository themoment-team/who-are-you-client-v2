import { AiConvertExampleCard, StepButton } from '..';
import type { PromptType } from '../../types';

interface PromptSelectModal {
  isModalOpen: boolean;
  selectedPrompt: PromptType;
  setSelectedPrompt: React.Dispatch<React.SetStateAction<PromptType>>;
  setIsAiConvert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageUrls: string[];
}

interface convertExampleImagesType {
  title: PromptType;
  img: string;
}

const PromptSelectModal = ({
  isModalOpen,
  selectedPrompt,
  setSelectedPrompt,
  setIsAiConvert,
  setIsModalOpen,
  imageUrls,
}: PromptSelectModal) => {
  const convertExampleImages: convertExampleImagesType[] = [
    { title: '디즈니', img: '/images/디즈니.png' },
    { title: '레고', img: '/images/레고.png' },
    { title: '마인크래프트', img: '/images/마인크래프트.png' },
    { title: '스누피', img: '/images/스누피.png' },
    { title: '심슨', img: '/images/심슨.png' },
  ];

  const isBusinessCard = imageUrls.length === 1;
  return (
    <div
      className={`absolute inset-0 z-10 h-full w-full rounded-3xl bg-[rgba(0,0,0,0.25)] ${isModalOpen ? 'block' : 'hidden'}`}
    >
      <div
        className={`absolute right-0 bottom-0 left-0 flex flex-col gap-9 rounded-3xl bg-white px-12 pt-12 pb-10 ${isBusinessCard ? 'h-[30.625rem]' : 'h-[55.3125rem]'}`}
      >
        <div className="flex h-28 flex-col gap-4">
          <h1 className="text-4xl leading-none font-extrabold text-[#222]">
            AI로 변환시킬 사진 선택
          </h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            AI로 변환시킬 사진을 선택해주세요.
          </p>
        </div>

        <div className="flex gap-4">
          {imageUrls.map((imageUrl) => (
            <img src={imageUrl} className="h-[12.8125rem] w-[10.25rem] rounded-md" />
          ))}
        </div>

        <div className="border-b border-solid border-[#666]" />

        <div className="flex h-28 flex-col gap-4">
          <h1 className="text-4xl leading-none font-extrabold text-[#222]">AI 변환 키워드 선택</h1>
          <p className="text-xl leading-[150%] font-medium text-[#666]">
            AI 변환 키워드를 선택해주세요.
            <br />
            선택한 키워드로 아래 사진과 같은 스타일로 변환됩니다.
          </p>
        </div>

        <div className="flex gap-4">
          {convertExampleImages.map(({ title, img }) => (
            <AiConvertExampleCard
              key={title}
              title={title}
              img={img}
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
            <StepButton
              variant="next"
              onClick={() => {
                if (selectedPrompt === null) {
                  setIsAiConvert(false);
                }
                setIsModalOpen(false);
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
