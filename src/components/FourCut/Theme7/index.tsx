import type { FourCutProps } from '../../../types';
import FourCutFooter from '../FourCutFooter';
import FourCutPhotoGrid from '../FourCutPhotoGrid';

// 캐릭터 PNG는 저장소에 포함하지 않으므로, 별도로 넣은 환경에서만 env로 켬
const CHARACTER_SRC =
  import.meta.env.VITE_USE_THEME7_CHARACTER_IMAGE === 'true'
    ? '/images/four-cut-theme7-character.png'
    : '/images/four-cut-theme7-character.svg';

const FourCutTheme7 = ({
  imageUrls,
  onImageClick,
  isClickable = true,
  convertingIndices,
  aiConvertHistory,
}: FourCutProps) => {
  return (
    <div className="relative flex h-[34.6875rem] w-[23.4375rem] flex-col justify-between bg-[#FFD3E2] bg-[url('/images/four-cut-theme7-bg.svg')] bg-cover px-[1.125rem] py-[1.5rem] pt-[2.25rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none">
      <img
        src="/images/four-cut-theme7-cover.svg"
        alt=""
        className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full"
      />
      <img
        src={CHARACTER_SRC}
        alt=""
        className="pointer-events-none absolute bottom-[.75rem] left-1/2 z-10 h-[4.375rem] max-w-[8rem] -translate-x-1/2 object-contain"
      />
      <FourCutPhotoGrid
        imageUrls={imageUrls}
        onImageClick={onImageClick}
        isClickable={isClickable}
        convertingIndices={convertingIndices}
        aiConvertHistory={aiConvertHistory}
        rowGapClassName="gap-[.9375rem]"
      />
      <FourCutFooter />
    </div>
  );
};

export default FourCutTheme7;
