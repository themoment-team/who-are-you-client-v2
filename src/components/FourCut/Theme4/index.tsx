import { GSMLogoWithText } from '../../../assets';

const FourCutTheme4 = () => {
  return (
    <div className="flex h-[32.5rem] w-[21.5rem] flex-col gap-7 bg-[#FBD5DC] px-[1rem] pt-[1.5rem] pb-[1.6875rem] shadow-[0_2px_20px_0_rgba(177,177,177,0.25)] print:border print:border-[#CFCFCF] print:shadow-none">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img
            src="/public/images/example.jpg"
            alt="image 1"
            className="h-[11.875rem] w-[9.5rem] object-cover object-center"
          />
          <img
            src="/public/images/example.jpg"
            alt="image 2"
            className="h-[11.875rem] w-[9.5rem] object-cover object-center"
          />
        </div>
        <div className="flex gap-2">
          <img
            src="/public/images/example.jpg"
            alt="image 3"
            className="h-[11.875rem] w-[9.5rem] object-cover object-center"
          />
          <img
            src="/public/images/example.jpg"
            alt="image 4"
            className="h-[11.875rem] w-[9.5rem] object-cover object-center"
          />
        </div>
      </div>
      <GSMLogoWithText color="#FEE3E8" />
    </div>
  );
};

export default FourCutTheme4;
