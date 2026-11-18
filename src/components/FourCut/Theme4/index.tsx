import type { FourCutProps } from '../../../types';
import FourCutFooter from '../FourCutFooter';
import FourCutPhotoGrid from '../FourCutPhotoGrid';

const FourCutTheme4 = ({
  imageUrls,
  onImageClick,
  isClickable = true,
  convertingIndices,
  aiConvertHistory,
}: FourCutProps) => {
  return (
    <div className="relative flex h-[34.6875rem] w-[23.4375rem] flex-col justify-between bg-white px-[1.125rem] py-[1.5rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none">
      <img
        src="/images/four-cut-theme4-cover.png"
        alt=""
        className="pointer-events-none absolute top-0 left-0"
      />
      <FourCutPhotoGrid
        imageUrls={imageUrls}
        onImageClick={onImageClick}
        isClickable={isClickable}
        convertingIndices={convertingIndices}
        aiConvertHistory={aiConvertHistory}
        rowGapClassName="gap-[1.7813rem]"
      />
      <FourCutFooter />
    </div>
  );
};

export default FourCutTheme4;
