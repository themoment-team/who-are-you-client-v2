import { GSMLogoWithText, GwangjuFutureEducationExpo } from '../../../assets';
import type { FourCutProps } from '../../../types';

const FourCutTheme3 = ({ imageUrls, onImageClick, isClickable = true }: FourCutProps) => {
  return (
    <div className="relative flex h-[14.8cm] w-[10cm] flex-col justify-between bg-white px-[1.125rem] py-[1.5rem] pt-[2.25rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none print:outline print:outline-[#CFCFCF]">
      <img
        src="/images/four-cut-theme3-cover.png"
        alt="cover image"
        className="pointer-events-none absolute top-0 left-0"
      />
      <div className="flex flex-col items-center gap-[.9375rem]">
        <div className="flex gap-[.9375rem]">
          <img
            src={imageUrls[0]}
            alt="image 1"
            className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={isClickable ? () => onImageClick(0) : undefined}
          />
          <img
            src={imageUrls[1]}
            alt="image 2"
            className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={isClickable ? () => onImageClick(1) : undefined}
          />
        </div>
        <div className="flex gap-[.9375rem]">
          <img
            src={imageUrls[2]}
            alt="image 3"
            className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={isClickable ? () => onImageClick(2) : undefined}
          />
          <img
            src={imageUrls[3]}
            alt="image 4"
            className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={isClickable ? () => onImageClick(3) : undefined}
          />
        </div>
      </div>
      <div className="z-10 flex items-center justify-between">
        <GSMLogoWithText />
        {import.meta.env.VITE_SHOW_EXPO_LOGO === 'true' && (
          <div>
            <GwangjuFutureEducationExpo />
          </div>
        )}
      </div>
    </div>
  );
};

export default FourCutTheme3;
