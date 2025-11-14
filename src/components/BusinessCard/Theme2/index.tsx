import { GSMLogo, LongBar } from '../../../assets';
import type { BusinessCardProps } from '../../../types';
import BusinessCardContactInfo from '../BusinessCardContactInfo';

const BusinessCardTheme2 = ({
  name,
  major,
  email,
  tel,
  imageUrl,
  onImageClick,
}: BusinessCardProps) => {
  return (
    <div className="relative flex h-[11.8125rem] w-[21.25rem] justify-between bg-white p-[1.75rem] pl-[1.4375rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:border print:border-[#CFCFCF] print:shadow-none">
      <GSMLogo top={112} left={32} />
      <div className="z-10 flex gap-[.8125rem]">
        <LongBar />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[.1875rem]">
            <p className="text-[1rem] font-semibold tracking-[.04rem]">{name}</p>
            {major && (
              <p className="h-[.75rem] text-[.625rem] leading-[.625rem] font-normal tracking-[.0125rem] text-[#888]">
                {major}
              </p>
            )}
          </div>
          <BusinessCardContactInfo major={major} email={email} tel={tel} />
        </div>
      </div>
      <img
        src={imageUrl}
        alt="image"
        className="h-[8.3125rem] w-[8.3125rem] cursor-pointer rounded-[.2875rem] object-cover object-center"
        onClick={onImageClick}
      />
    </div>
  );
};

export default BusinessCardTheme2;
