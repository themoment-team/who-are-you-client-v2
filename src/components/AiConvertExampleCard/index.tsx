import type { PromptType } from '../../types';

interface AiConvertExampleCardProps {
  title: PromptType;
  img: string;
  selectedPrompt: PromptType;
  setSelectedPrompt: React.Dispatch<React.SetStateAction<PromptType>>;
}

const AiConvertExampleCard = ({
  title,
  img,
  selectedPrompt,
  setSelectedPrompt,
}: AiConvertExampleCardProps) => {
  const handleOnClick = () => {
    setSelectedPrompt(title);
  };

  return (
    <div className="relative" onClick={handleOnClick}>
      <div
        className={`flex w-32 cursor-pointer flex-col items-center gap-4 rounded-xl border border-solid border-[#222] p-4 transition-all duration-700 ${selectedPrompt === title && 'bg-black'}`}
      >
        <p
          className={`text-center text-xl leading-[1.625rem] font-bold whitespace-nowrap text-[#222] ${selectedPrompt === title && 'text-white'}`}
        >
          {title}
        </p>
        <img src={img} className="h-24 w-24 rounded-xl" />
      </div>
      {selectedPrompt !== title && selectedPrompt !== null && (
        <div className="absolute inset-0 h-full w-32 rounded-xl bg-white/50 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default AiConvertExampleCard;
