import { Spin } from '../../../assets';
import type { FourCutProps } from '../../../types';

interface FourCutPhotoGridProps extends FourCutProps {
  rowGapClassName: string;
}

const FourCutPhotoGrid = ({
  imageUrls,
  onImageClick,
  isClickable = true,
  convertingIndices,
  aiConvertHistory,
  rowGapClassName,
}: FourCutPhotoGridProps) => {
  const renderPhoto = (index: number) => {
    if (imageUrls[index] === '/images/example.png') {
      return (
        <div
          className="flex h-[12.6563rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
          aria-label={`이미지 ${aiConvertHistory?.[index]?.length ? '재' : ''}변환 중`}
        >
          <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
            이미지
            <br />
            {aiConvertHistory?.[index]?.length ? '재' : ''}변환 중
          </p>
          <Spin />
        </div>
      );
    }

    const canClick = isClickable && !convertingIndices?.has(index);

    return (
      <img
        src={imageUrls[index]}
        alt={`image ${index + 1}`}
        className={`h-[12.6563rem] w-[10.125rem] object-cover object-center ${canClick ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={canClick ? () => onImageClick(index) : undefined}
      />
    );
  };

  return (
    <div className={`flex flex-col items-center ${rowGapClassName}`}>
      <div className="flex gap-[.9375rem]">
        {renderPhoto(0)}
        {renderPhoto(1)}
      </div>
      <div className="flex gap-[.9375rem]">
        {renderPhoto(2)}
        {renderPhoto(3)}
      </div>
    </div>
  );
};

export default FourCutPhotoGrid;
