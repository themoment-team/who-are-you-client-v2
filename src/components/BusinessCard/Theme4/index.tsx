import { GSMLogo, ShortBar } from '../../../assets';
import type { BusinessCardProps } from '../../../types';

const BusinessCardTheme4 = ({
  name,
  major,
  email,
  tel,
  imageSrc,
  onImageClick,
}: BusinessCardProps) => {
  return (
    <div className="relative flex h-[21.25rem] w-[11.8125rem] flex-col gap-[2.25rem] bg-white p-[1.75rem] shadow-[0_2px_6px_0_rgba(209,209,209,0.25)] print:border print:border-[#CFCFCF] print:shadow-none">
      <GSMLogo top={264} left={24} />
      <img
        src={imageSrc}
        alt="image"
        className="h-[8.3125rem] w-[8.3125rem] cursor-pointer rounded-full object-cover object-center"
        onClick={onImageClick}
      />
      <div className="z-10 flex h-full flex-col justify-between">
        <div className="flex flex-col gap-[.1875rem]">
          <p className="text-[1rem] font-semibold tracking-[.04rem]">{name}</p>
          <p className="h-[.75rem] text-[.625rem] leading-[.625rem] font-normal tracking-[.0125rem] text-[#888]">
            {major}
          </p>
          <ShortBar />
        </div>
        <div className="flex flex-col gap-[.3125rem]">
          <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
            Major) {major}
          </p>
          <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
            Email) {email}
          </p>
          <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
            Tel) {tel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardTheme4;
