import { GSMLogoWithText, GwangjuFutureEducationExpo, Spin } from '../../../assets';
import type { FourCutProps } from '../../../types';

const FourCutTheme2 = ({
  imageUrls,
  onImageClick,
  isClickable = true,
  convertingIndices,
  aiConvertHistory,
}: FourCutProps) => {
  return (
    <div className="relative flex h-[34.6875rem] w-[23.4375rem] flex-col justify-between bg-white px-[1.125rem] pt-[2.8125rem] pb-[1rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none">
      <img
        src="/images/four-cut-theme5-cover.png"
        alt="cover image"
        className="pointer-events-none absolute top-0 left-0"
      />
      <div className="flex flex-col items-center gap-[.9375rem]">
        <div className="flex gap-[.9375rem]">
          {imageUrls[0] === '/images/example.png' ? (
            <div
              className="flex h-[12.6563rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label={`이미지 ${aiConvertHistory?.[0]?.length ? '재' : ''}변환 중`}
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                {aiConvertHistory?.[0]?.length ? '재' : ''}변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[0]}
              alt="image 1"
              className={`h-[12.6563rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(0) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(0) ? () => onImageClick(0) : undefined
              }
            />
          )}
          {imageUrls[1] === '/images/example.png' ? (
            <div
              className="flex h-[12.6563rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label={`이미지 ${aiConvertHistory?.[1]?.length ? '재' : ''}변환 중`}
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                {aiConvertHistory?.[1]?.length ? '재' : ''}변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[1]}
              alt="image 2"
              className={`h-[12.6563rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(1) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(1) ? () => onImageClick(1) : undefined
              }
            />
          )}
        </div>
        <div className="flex gap-[.9375rem]">
          {imageUrls[2] === '/images/example.png' ? (
            <div
              className="flex h-[12.6563rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label={`이미지 ${aiConvertHistory?.[2]?.length ? '재' : ''}변환 중`}
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                {aiConvertHistory?.[2]?.length ? '재' : ''}변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[2]}
              alt="image 3"
              className={`h-[12.6563rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(2) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(2) ? () => onImageClick(2) : undefined
              }
            />
          )}
          {imageUrls[3] === '/images/example.png' ? (
            <div
              className="flex h-[12.6563rem] w-[10.125rem] flex-shrink-0 cursor-not-allowed flex-col items-center justify-center gap-4 rounded-sm bg-[#F8F8F8]"
              aria-label={`이미지 ${aiConvertHistory?.[3]?.length ? '재' : ''}변환 중`}
            >
              <p className="text-center text-[1rem]/[1rem] font-bold text-[#666]">
                이미지
                <br />
                {aiConvertHistory?.[3]?.length ? '재' : ''}변환 중
              </p>
              <Spin />
            </div>
          ) : (
            <img
              src={imageUrls[3]}
              alt="image 4"
              className={`h-[12.6563rem] w-[10.125rem] object-cover object-center ${isClickable && !convertingIndices?.has(3) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={
                isClickable && !convertingIndices?.has(3) ? () => onImageClick(3) : undefined
              }
            />
          )}
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
