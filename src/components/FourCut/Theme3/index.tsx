import { GSMLogoWithText } from '../../../assets';
import type { FourCutProps } from '../../../types';

const FourCutTheme3 = ({ imageSrcs, onImageClick }: FourCutProps) => {
  return (
    <div className="flex h-[14.8cm] w-[10cm] flex-col gap-6 bg-[#444] px-[1.125rem] py-[1.5rem] shadow-[0_2px_20px_0_rgba(177,177,177,0.25)] print:shadow-none print:outline print:outline-[#CFCFCF]">
      <div className="flex flex-col items-center gap-[.9375rem]">
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
      <GSMLogoWithText color="#262626" />
    </div>
  );
};

export default FourCutTheme3;
