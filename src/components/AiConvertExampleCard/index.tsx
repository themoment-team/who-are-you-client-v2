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
  const currentImageData = imageUrls.find((item) => item.img === currentImage);
  const isSelectedPrompt = currentImageData?.prompt === title;
  const shouldShowOverlay = currentImageData?.prompt !== null && currentImageData?.prompt !== title;

  const handleOnClick = () => {
    setImageUrls((prev) =>
      prev.map((item) => (item.img === currentImage ? { ...item, prompt: title } : item)),
    );
  };

  return (
    <div className="relative cursor-pointer" onClick={handleOnClick}>
      <div
        className={`flex w-32 cursor-pointer flex-col items-center gap-4 rounded-xl border border-solid border-[#222] p-4 transition-all duration-700 ${isSelectedPrompt && 'bg-black'}`}
      >
        <p
          className={`text-center text-xl leading-[1.625rem] font-bold whitespace-nowrap text-[#222] ${isSelectedPrompt && 'text-white'}`}
        >
          {title}
        </p>
        <img src={img} className="h-24 w-24 rounded-xl" />
      </div>
      {shouldShowOverlay && (
        <div className="absolute inset-0 h-full w-32 rounded-xl bg-white/50 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default AiConvertExampleCard;
