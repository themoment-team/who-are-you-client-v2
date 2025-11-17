import { formatPhoneNumber } from '../../../utils';

interface BusinessCardContactInfoProps {
  major?: string;
  email?: string;
  tel: string;
}

const BusinessCardContactInfo = ({ major, email, tel }: BusinessCardContactInfoProps) => {
  return (
    <div className="flex flex-col gap-[.3125rem]">
      {major && (
        <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
          Major) {major}
        </p>
      )}
      {email && (
        <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
          Email) {email}
        </p>
      )}
      <p className="text-[.5313rem]/[.5906rem] font-normal tracking-[.0106rem] text-[#494949]">
        Tel) {formatPhoneNumber(tel)}
      </p>
    </div>
  );
};

export default BusinessCardContactInfo;
