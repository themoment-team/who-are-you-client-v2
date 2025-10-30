import type { ConvertImagePrompt, PromptType } from '../../types';

interface AiConvertExampleCardProps {
  promptName: PromptType;
  previewImageUrl: string;
  imageUrls: ConvertImagePrompt[];
  setImageUrls: React.Dispatch<React.SetStateAction<ConvertImagePrompt[]>>;
  currentImage: string;
}

const AiConvertExampleCard = ({
  promptName,
  previewImageUrl,
  imageUrls,
  setImageUrls,
  currentImage,
}: AiConvertExampleCardProps) => {
  const currentImageData = imageUrls.find((item) => item.imageUrl === currentImage);
  const isSelectedPrompt = currentImageData?.promptName === promptName;
  const shouldShowOverlay =
    currentImageData?.promptName !== null && currentImageData?.promptName !== promptName;

  const handleOnClick = () => {
    setImageUrls((prev) =>
      prev.map((item) =>
        item.imageUrl === currentImage ? { ...item, promptName: promptName } : item,
      ),
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
          {promptName}
        </p>
        <img src={previewImageUrl} className="h-24 w-24 rounded-xl" />
      </div>
      {shouldShowOverlay && (
        <div className="absolute inset-0 h-full w-32 rounded-xl bg-white/50 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default AiConvertExampleCard;
