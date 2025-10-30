import type { convertImagePrompt } from '../../types';

interface SwitchProps {
  isAiConvert: boolean;
  setIsAiConvert: React.Dispatch<React.SetStateAction<boolean>>;
  setImageUrls: React.Dispatch<React.SetStateAction<convertImagePrompt[]>>;
}

const Switch = ({ isAiConvert, setIsAiConvert, setImageUrls }: SwitchProps) => {
  const handleToggle = () => {
    setIsAiConvert((prev) => !prev);
    setImageUrls((prev) => prev.map((item) => ({ ...item, prompt: null })));
  };
  return (
    <div
      className={`relative flex h-[1.6875rem] w-12 cursor-pointer items-center rounded-[1.4375rem] p-[0.19rem] transition-colors duration-200 ${
        isAiConvert ? 'bg-black' : 'bg-[#BBB]'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`absolute z-10 h-[1.3125rem] w-[1.3125rem] rounded-[50%] bg-white transition-transform duration-200 ${
          isAiConvert ? 'translate-x-[1.3125rem]' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default Switch;
