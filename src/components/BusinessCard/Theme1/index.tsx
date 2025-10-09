import { GSMLogo, ShortBar } from '../../../assets';
import type { BusinessCardProps } from '../../../types';

const BusinessCardTheme1 = ({ name, major, email, tel, imageSrc }: BusinessCardProps) => {
  return (
    <div className="relative flex h-[11.8125rem] w-[21.25rem] justify-between bg-white p-[1.75rem] shadow-[0_2px_6px_0_rgba(209,209,209,0.25)] print:border print:border-[#CFCFCF] print:shadow-none">
      <GSMLogo top={16.5} left={17} />
      <div className="z-10 flex flex-col justify-between">
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
      <img
        src={imageSrc}
        alt="image"
        className="h-[8.3125rem] w-[8.3125rem] rounded-[.2875rem] object-cover object-center"
      />
    </div>
  );
};

export default BusinessCardTheme1;
