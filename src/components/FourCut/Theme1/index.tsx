import { GSMLogoWithText, GwangjuFutureEducationExpo, Spin } from '../../../assets';
import type { FourCutProps } from '../../../types';

const FourCutTheme1 = ({
  imageUrls,
  onImageClick,
  isClickable = true,
  convertingIndices,
}: FourCutProps) => {
  return (
    <div className="flex h-[14.8cm] w-[10cm] flex-col justify-between bg-white px-[1.125rem] py-[1.5rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none print:outline print:outline-[#CFCFCF]">
      <div className="flex flex-col items-center gap-[.9375rem]">
        <div className="flex gap-[.9375rem]">
          {imageUrls[0] === '/images/example.png' ? (
            <div
              className="flex h-[12.625rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label="이미지 재변환 중"
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[0]}
              alt="image 1"
              className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(0) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(0) ? () => onImageClick(0) : undefined
              }
            />
          )}
          {imageUrls[1] === '/images/example.png' ? (
            <div
              className="flex h-[12.625rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label="이미지 재변환 중"
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[1]}
              alt="image 2"
              className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(1) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(1) ? () => onImageClick(1) : undefined
              }
            />
          )}
        </div>
        <div className="flex gap-[.9375rem]">
          {imageUrls[2] === '/images/example.png' ? (
            <div
              className="flex h-[12.625rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label="이미지 재변환 중"
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[2]}
              alt="image 3"
              className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(2) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(2) ? () => onImageClick(2) : undefined
              }
            />
          )}
          {imageUrls[3] === '/images/example.png' ? (
            <div
              className="flex h-[12.625rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label="이미지 재변환 중"
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                재변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[3]}
              alt="image 4"
              className={`h-[12.625rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(3) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(3) ? () => onImageClick(3) : undefined
              }
            />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
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

export default FourCutTheme1;
