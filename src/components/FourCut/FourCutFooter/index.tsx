import { GSMLogoWithText, GwangjuFutureEducationExpo } from '../../../assets';

const FourCutFooter = () => (
  <div className="z-10 flex items-center justify-between">
    <GSMLogoWithText />
    {import.meta.env.VITE_SHOW_EXPO_LOGO === 'true' && (
      <div>
        <GwangjuFutureEducationExpo />
      </div>
    )}
  </div>
);

export default FourCutFooter;
