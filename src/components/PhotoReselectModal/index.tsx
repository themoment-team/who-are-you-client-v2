import { Plus, Spin } from '../../assets';
import type { CardType } from '../../types';
import StepButton from '../StepButton';

interface PhotoReselectModalProps {
  cardType: CardType | undefined;
  onClose: () => void;
}

const PhotoReselectModal = ({ cardType, onClose }: PhotoReselectModalProps) => {
  const isBusinessCard = cardType === 'BUSINESS_CARD';
  const cardTypeLabel = isBusinessCard ? '명함' : '인생네컷';

  const IMAGE_CLASS = isBusinessCard ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]';
  const BUTTON_SIZE_CLASS = IMAGE_CLASS;
  const COMMON_BUTTON_CLASSES = `flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8] ${BUTTON_SIZE_CLASS}`;

  const handleImageSelect = () => {
    // 이미지 선택 로직 추가 예정
    console.log('이미지 선택됨');
  };

  const handleImageRegenerate = () => {
    // 이미지 재변환 로직 추가 예정
    console.log('이미지 재변환 시작');
  };

  return (
    <div className="absolute top-0 left-0 z-20 flex h-[61.5rem] w-[50rem] items-end rounded-[1.5rem] bg-black/20">
      <div className="flex w-full flex-col gap-9 rounded-[1.5rem] bg-white p-12 pb-9">
        <div className="flex flex-col gap-4">
          <h1 className="text-[2.25rem]/[2.25rem] font-black text-[#222]">
            {cardTypeLabel} 이미지 재선택
          </h1>
          <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
            {cardTypeLabel}에 사용될 이미지를 재선택할 수 있습니다. 마음에 드는 이미지가
            <br />
            없을 경우 이미지 재변환으로 새로운 이미지를 생성할 수 있습니다.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleImageSelect}
            className={`cursor-pointer rounded-sm ${IMAGE_CLASS}`}
            aria-label="이미지 선택"
          >
            <img
              src="/images/example.jpg"
              alt={`${cardTypeLabel} 이미지 예시`}
              className={`h-full w-full rounded-sm object-cover object-center`}
            />
          </button>
          <button
            onClick={handleImageRegenerate}
            className={COMMON_BUTTON_CLASSES}
            aria-label="이미지 재변환"
          >
            <p className="text-[1rem]/[1rem] font-bold text-[#666]">이미지 재변환</p>
            <Plus />
          </button>
          <button className={COMMON_BUTTON_CLASSES} aria-label="이미지 재변환 중">
            <p className="text-[1rem]/[1rem] font-bold text-[#666]">
              이미지
              <br />
              재변환 중...
            </p>
            <Spin />
          </button>
        </div>
        <div className="flex justify-end">
          <StepButton variant="next" onClick={onClose}>
            확인
          </StepButton>
        </div>
      </div>
    </div>
  );
};

export default PhotoReselectModal;
