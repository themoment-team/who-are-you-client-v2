import { useState } from 'react';

import { toast } from 'react-toastify';

import { Plus, Spin } from '../../assets';
import type { CardType, ConvertImagePrompt, PromptType } from '../../types';
import StepButton from '../StepButton';

interface PhotoReselectModalProps {
  cardType: CardType | undefined;
  selectedImageIndex: number;
  imageUrls: ConvertImagePrompt[];
  setImageUrls: React.Dispatch<React.SetStateAction<ConvertImagePrompt[]>>;
  aiConvertImage: string[];
  setAiConvertImage: React.Dispatch<React.SetStateAction<string[]>>;
  isAiConvert: boolean;
  convertSingleImage: (imageUrl: string, selectedPrompt: PromptType) => Promise<string>;
  isAiConverting: boolean;
  onClose: () => void;
}

const PhotoReselectModal = ({
  cardType,
  selectedImageIndex,
  imageUrls,
  setImageUrls,
  aiConvertImage,
  setAiConvertImage,
  isAiConvert,
  convertSingleImage,
  isAiConverting,
  onClose,
}: PhotoReselectModalProps) => {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const isBusinessCard = cardType === 'BUSINESS_CARD';
  const cardTypeLabel = isBusinessCard ? '명함' : '인생네컷';

  const IMAGE_CLASS = isBusinessCard ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]';
  const BUTTON_SIZE_CLASS = IMAGE_CLASS;
  const COMMON_BUTTON_CLASSES = `flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8] ${BUTTON_SIZE_CLASS}`;

  // 현재 표시할 이미지들 (AI 변환 여부에 따라)
  const allImageUrls = isAiConvert ? aiConvertImage : imageUrls.map((x) => x.imageUrl);

  // 선택한 이미지로 교체
  const handleImageSelect = (targetImageUrl: string) => {
    if (isAiConvert) {
      // AI 변환된 이미지 배열에서 교체
      const updatedImages = [...aiConvertImage];
      const currentImage = updatedImages[selectedImageIndex];
      const targetIndex = updatedImages.findIndex((url) => url === targetImageUrl);

      if (targetIndex !== -1 && targetIndex !== selectedImageIndex) {
        updatedImages[selectedImageIndex] = targetImageUrl;
        updatedImages[targetIndex] = currentImage;
        setAiConvertImage(updatedImages);
        toast.success('이미지가 교체되었습니다!');
      }
    } else {
      // 원본 이미지 배열에서 교체
      const updatedImages = [...imageUrls];
      const currentImage = updatedImages[selectedImageIndex];
      const targetIndex = updatedImages.findIndex((item) => item.imageUrl === targetImageUrl);

      if (targetIndex !== -1 && targetIndex !== selectedImageIndex) {
        updatedImages[selectedImageIndex] = {
          ...updatedImages[selectedImageIndex],
          imageUrl: targetImageUrl,
        };
        updatedImages[targetIndex] = {
          ...updatedImages[targetIndex],
          imageUrl: currentImage.imageUrl,
        };
        setImageUrls(updatedImages);
        toast.success('이미지가 교체되었습니다!');
      }
    }
  };

  // 이미지 재변환
  const handleImageRegenerate = async () => {
    if (isRegenerating || isAiConverting) return;

    setIsRegenerating(true);
    try {
      const originalImage = imageUrls[selectedImageIndex];
      const newConvertedImageUrl = await convertSingleImage(
        originalImage.imageUrl,
        originalImage.promptName,
      );

      if (isAiConvert) {
        const updatedImages = [...aiConvertImage];
        updatedImages[selectedImageIndex] = newConvertedImageUrl;
        setAiConvertImage(updatedImages);
      }

      toast.success('이미지가 재변환되었습니다!');
    } catch (error) {
      console.error('이미지 재변환 실패:', error);
      toast.error('이미지 재변환에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsRegenerating(false);
    }
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
          {/* 다른 이미지들 표시 */}
          {allImageUrls.map((imageUrl, index) => {
            if (index === selectedImageIndex) return null;
            return (
              <button
                key={index}
                onClick={() => handleImageSelect(imageUrl)}
                className={`cursor-pointer rounded-sm ${IMAGE_CLASS}`}
                aria-label={`이미지 ${index + 1} 선택`}
              >
                <img
                  src={imageUrl}
                  alt={`${cardTypeLabel} 이미지 ${index + 1}`}
                  className="h-full w-full rounded-sm object-cover object-center"
                />
              </button>
            );
          })}
          {/* 이미지 재변환 버튼 - AI 변환이 켜져있을 때만 표시 */}
          {isAiConvert && !isRegenerating && (
            <button
              onClick={handleImageRegenerate}
              className={COMMON_BUTTON_CLASSES}
              aria-label="이미지 재변환"
            >
              <p className="text-[1rem]/[1rem] font-bold text-[#666]">이미지 재변환</p>
              <Plus />
            </button>
          )}
          {/* 재변환 중 표시 */}
          {isRegenerating && (
            <div className={COMMON_BUTTON_CLASSES} aria-label="이미지 재변환 중">
              <p className="text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중...
              </p>
              <Spin />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <StepButton variant="next" onClick={onClose} disabled={isRegenerating}>
            확인
          </StepButton>
        </div>
      </div>
    </div>
  );
};

export default PhotoReselectModal;
