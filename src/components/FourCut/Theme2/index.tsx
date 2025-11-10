import { GSMLogoWithText, GwangjuFutureEducationExpo } from '../../../assets';
import type { FourCutProps } from '../../../types';

const FourCutTheme2 = ({ imageSrcs, onImageClick }: FourCutProps) => {
  return (
    <div className="relative flex h-[14.8cm] w-[10cm] flex-col justify-between bg-white px-[1.125rem] py-[1.5rem] shadow-[0_2px_20px_0_rgba(177,177,177,0.25)] print:shadow-none print:outline print:outline-[#CFCFCF]">
      <img
        src="/images/four-cut-theme2-cover.png"
        alt="cover image"
        className="absolute top-0 left-0"
      />
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="flex gap-[.9375rem]">
          <img
            src={imageSrcs[0]}
            alt="image 1"
            className="h-[12.625rem] w-[10.125rem] cursor-pointer object-cover object-center"
            onClick={onImageClick}
          />
          <img
            src={imageSrcs[1]}
            alt="image 2"
            className="h-[12.625rem] w-[10.125rem] cursor-pointer object-cover object-center"
            onClick={onImageClick}
          />
        </div>
        <div className="flex gap-[.9375rem]">
          <img
            src={imageSrcs[2]}
            alt="image 3"
            className="h-[12.625rem] w-[10.125rem] cursor-pointer object-cover object-center"
            onClick={onImageClick}
          />
          <img
            src={imageSrcs[3]}
            alt="image 4"
            className="h-[12.625rem] w-[10.125rem] cursor-pointer object-cover object-center"
            onClick={onImageClick}
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

export default FourCutTheme2;
