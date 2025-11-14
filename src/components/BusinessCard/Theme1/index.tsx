import { GSMLogo, ShortBar } from '../../../assets';
import type { BusinessCardProps } from '../../../types';
import BusinessCardContactInfo from '../BusinessCardContactInfo';

const BusinessCardTheme1 = ({
  name,
  major,
  email,
  tel,
  imageUrl,
  onImageClick,
}: BusinessCardProps) => {
  return (
    <div className="relative flex h-[11.8125rem] w-[21.25rem] justify-between bg-white p-[1.75rem] shadow-[0_2px_6px_0_rgba(209,209,209,1)] print:shadow-none print:outline print:outline-[#CFCFCF]">
      <GSMLogo top={16.5} left={17} />
      <div className="z-10 flex flex-col justify-between">
        <div className="flex flex-col gap-[.1875rem]">
          <p className="text-[1rem] font-semibold tracking-[.04rem]">{name}</p>
          {major && (
            <p className="h-[.75rem] text-[.625rem] leading-[.625rem] font-normal tracking-[.0125rem] text-[#888]">
              {major}
            </p>
          )}
          <ShortBar />
        </div>
        <BusinessCardContactInfo major={major} email={email} tel={tel} />
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

export default BusinessCardTheme1;
