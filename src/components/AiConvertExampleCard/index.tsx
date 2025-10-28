import type { PromptType, convertImagePrompt } from '../../types';

interface AiConvertExampleCardProps {
  title: PromptType;
  img: string;
  imageUrls: convertImagePrompt[];
  setImageUrls: React.Dispatch<React.SetStateAction<convertImagePrompt[]>>;
  currentImage: string;
}

const AiConvertExampleCard = ({
  title,
  img,
  imageUrls,
  setImageUrls,
  currentImage,
}: AiConvertExampleCardProps) => {
  const currentImageItem = imageUrls.find((item) => item.img === currentImage);

  const handleOnClick = () => {
    setImageUrls((prev) =>
      prev.map((item) => (item.img === currentImage ? { ...item, prompt: title } : item)),
    );
  };

  return (
    <div className="relative" onClick={handleOnClick}>
      <div
        className={`flex w-32 cursor-pointer flex-col items-center gap-4 rounded-xl border border-solid border-[#222] p-4 transition-all duration-700 ${currentImageItem?.prompt === title && 'bg-black'}`}
      >
        <p
          className={`text-center text-xl leading-[1.625rem] font-bold whitespace-nowrap text-[#222] ${currentImageItem?.prompt === title && 'text-white'}`}
        >
          {title}
        </p>
        <img src={img} className="h-24 w-24 rounded-xl" />
      </div>
      {currentImageItem?.prompt !== null && currentImageItem?.prompt !== title && (
        <div className="absolute inset-0 h-full w-32 rounded-xl bg-white/50 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default AiConvertExampleCard;
