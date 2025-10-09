import { GSMLogo, LongBar } from '../../../assets';

const BusinessCardTheme2 = () => {
  return (
    <div className="relative flex h-[11.8125rem] w-[21.25rem] justify-between rounded-lg bg-white p-[1.75rem] pl-[1.4375rem] shadow-[0_2px_6px_0_rgba(209,209,209,0.25)]">
      <GSMLogo top={112} left={32} />
      <div className="flex gap-[.8125rem]">
        <LongBar />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[.1875rem]">
            <p className="text-[1rem] font-semibold tracking-[.04rem]">홍길동</p>
            <p className="h-[.75rem] text-[.625rem] leading-[.625rem] font-normal tracking-[.0125rem] text-[#888]">
              UI/UX Designer
            </p>
          </div>
          <div className="flex flex-col gap-[.3125rem]">
            <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
              Major) UI/UX Designer
            </p>
            <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
              Email) honggildong@gmail.com
            </p>
            <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
              Tel) 010-1234-5678
            </p>
          </div>
        </div>
      </div>
      <img
        src="/public/images/example.jpg"
        alt="image"
        className="h-[8.3125rem] w-[8.3125rem] rounded-[.2875rem] object-cover object-center"
      />
    </div>
  );
};

export default BusinessCardTheme2;
