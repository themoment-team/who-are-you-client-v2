import { useState } from 'react';

import { toast } from 'react-toastify';

import { Plus, Spin } from '../../assets';
import type { CardType, ConvertImagePrompt, PromptType } from '../../types';
import StepButton from '../StepButton';

interface PhotoReselectModalProps {
  cardType: CardType | undefined;
  selectedImageIndex: number;
  imageUrls: ConvertImagePrompt[];
  aiConvertImage: string[];
  setAiConvertImage: React.Dispatch<React.SetStateAction<string[]>>;
  aiConvertHistory: string[][];
  setAiConvertHistory: React.Dispatch<React.SetStateAction<string[][]>>;
  isAiConvert: boolean;
  convertSingleImage: (imageUrl: string, selectedPrompt: PromptType) => Promise<string>;
  isAiConverting: boolean;
  onClose: () => void;
}

const PhotoReselectModal = ({
  cardType,
  selectedImageIndex,
  imageUrls,
  aiConvertImage,
  setAiConvertImage,
  aiConvertHistory,
  setAiConvertHistory,
  isAiConvert,
  convertSingleImage,
  isAiConverting,
  onClose,
}: PhotoReselectModalProps) => {
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>(
    aiConvertImage[selectedImageIndex],
  );

  const isBusinessCard = cardType === 'BUSINESS_CARD';
  const cardTypeLabel = isBusinessCard ? '명함' : '인생네컷';

  const IMAGE_CLASS = isBusinessCard ? 'h-[8rem] w-[8rem]' : 'h-[12.8125rem] w-[10.25rem]';
  const BUTTON_SIZE_CLASS = IMAGE_CLASS;
  const COMMON_BUTTON_CLASSES = `flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8] ${BUTTON_SIZE_CLASS}`;

  const getAvailableImages = () => {
    if (isBusinessCard) {
      const allHistoryImages = aiConvertHistory.flat();
      return Array.from(new Set(allHistoryImages));
    } else {
      return aiConvertHistory[selectedImageIndex] || [];
    }
  };

  const availableImages = getAvailableImages();

  const handleImageClick = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleConfirm = () => {
    const currentImage = aiConvertImage[selectedImageIndex];
    const isImageChanged = currentImage !== selectedImageUrl;

    if (isImageChanged) {
      const updatedImages = [...aiConvertImage];
      updatedImages[selectedImageIndex] = selectedImageUrl;
      setAiConvertImage(updatedImages);
      toast.success('이미지가 교체되었습니다!');
    }

    onClose();
  };

  const handleImageRegenerate = async () => {
    if (isRegenerating || isAiConverting) return;

    setIsRegenerating(true);
    try {
      const originalImage = imageUrls[selectedImageIndex];
      const newConvertedImageUrl = await convertSingleImage(
        originalImage.imageUrl,
        originalImage.promptName,
      );

      setAiConvertHistory((prev) => {
        const newHistory = [...prev];
        if (!newHistory[selectedImageIndex]) {
          newHistory[selectedImageIndex] = [];
        }
        if (!newHistory[selectedImageIndex].includes(newConvertedImageUrl)) {
          newHistory[selectedImageIndex].push(newConvertedImageUrl);
        }
        return newHistory;
      });

      setSelectedImageUrl(newConvertedImageUrl);

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
          {availableImages.map((imageUrl, index) => {
            const isSelected = imageUrl === selectedImageUrl;
            return (
              <button
                key={index}
                onClick={() => handleImageClick(imageUrl)}
                className={`cursor-pointer rounded-sm ${IMAGE_CLASS} ${
                  isSelected ? 'ring-4 ring-[#222]' : 'ring-2 ring-transparent hover:ring-gray-300'
                }`}
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
          {isRegenerating && (
            <div className={COMMON_BUTTON_CLASSES} aria-label="이미지 재변환 중">
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중
              </p>
              <Spin />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <StepButton variant="next" onClick={handleConfirm} disabled={isRegenerating}>
            확인
          </StepButton>
        </div>
      </div>
    </div>
  );
};

export default PhotoReselectModal;
