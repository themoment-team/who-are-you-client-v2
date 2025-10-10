import { Plus, Spin } from '../../assets';
import type { CardType } from '../../types';

interface PhotoReselectModalProps {
  cardType: CardType | undefined;
  onClose: () => void;
}

const PhotoReselectModal = ({ cardType, onClose }: PhotoReselectModalProps) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-[61.5rem] w-[50rem] items-end rounded-[1.5rem] bg-black/20">
      <div className="flex w-full flex-col gap-9 rounded-[1.5rem] bg-white p-12 pb-9">
        <div className="flex flex-col gap-4">
          <h1 className="text-[2.25rem]/[2.25rem] font-black text-[#222]">
            {cardType === 'BUSINESS_CARD' ? '명함' : ''} 이미지 재선택
          </h1>
          <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
            {cardType === 'BUSINESS_CARD' ? '명함' : '인생네컷'}에 사용될 이미지를 재선택할 수
            있습니다. 마음에 드는 이미지가
            <br />
            없을 경우 이미지 재변환으로 새로운 이미지를 생성할 수 있습니다.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <img
            src="/images/example.jpg"
            alt="example"
            className={`cursor-pointer rounded-sm object-cover object-center ${
              cardType === 'BUSINESS_CARD' ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]'
            }`}
          />
          <button
            className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8] ${
              cardType === 'BUSINESS_CARD' ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]'
            }`}
          >
            <p className="text-[1rem]/[1rem] font-bold text-[#666]">이미지 재변환</p>
            <Plus />
          </button>
          <button
            className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8] ${
              cardType === 'BUSINESS_CARD' ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]'
            }`}
          >
            <p className="text-[1rem]/[1rem] font-bold text-[#666]">
              이미지
              <br />
              재변환 중...
            </p>
            <Spin />
          </button>
        </div>
        <div className="flex justify-end">
          <button
            className="cursor-pointer rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] font-medium text-[#222]"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoReselectModal;
