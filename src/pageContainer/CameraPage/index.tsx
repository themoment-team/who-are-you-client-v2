import { useRef, useState } from 'react';

import Webcam from 'react-webcam';

import { BusinessCardCameraGuide, FourCutCameraGuide } from '../../assets';
import { StepButton } from '../../components';
import { type CardType, STEP, type Step } from '../../types';
import { getCroppedImage } from '../../utils/imageUtils';

interface CameraPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  cardType?: CardType;
}

const VIDEO_CONSTRAINTS = { facingMode: 'user', width: 1280, height: 720 } as const;
const FOUR_CUT_TOTAL = 4;

const CameraPage = ({ setStep, setImageUrls, cardType }: CameraPageProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [currentPhotoCount, setCurrentPhotoCount] = useState<number>(1);
  const [isFlashing, setIsFlashing] = useState(false);

  const isFourCut = cardType === 'FOUR_CUT';

  const handleCapture = async () => {
    if (!webcamRef.current) return;

    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 400);

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      const croppedImageUrl = await getCroppedImage({ imageSrc, cardType });

      if (isFourCut) {
        const newImages = [...capturedImages, croppedImageUrl];
        setCapturedImages(newImages);

        if (newImages.length >= FOUR_CUT_TOTAL) {
          setImageUrls(newImages);
          setStep(STEP.AI_CONVERSION);
        } else {
          setCurrentPhotoCount(newImages.length + 1);
        }
      } else {
        setImageUrls([croppedImageUrl]);
        setStep(STEP.AI_CONVERSION);
      }
    } catch (err) {
      console.error('이미지 처리 오류:', err);
    }
  };

  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <div className="mb-[3rem] flex flex-col gap-4">
        <h1 className="text-[2.25rem] font-extrabold">
          {isFourCut ? '인생네컷 사진 촬영' : '명함 사진 촬영'}
        </h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          가이드라인을 따라서 사진을 촬영해주세요.
          <br />
          촬영된 사진으로 AI 이미지 변환을 할 수 있습니다.
        </p>
      </div>

      <div className="mb-[2.25rem] flex justify-center">
        <div className="relative h-[24.75rem] w-[44rem] overflow-hidden rounded-xl">
          <Webcam
            mirrored
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/png"
            videoConstraints={VIDEO_CONSTRAINTS}
            className="h-full w-full object-cover"
          />
          {isFlashing && <div className="animate-flash absolute inset-0 z-20 bg-white" />}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {isFourCut ? <FourCutCameraGuide /> : <BusinessCardCameraGuide />}
          </div>
          {isFourCut && (
            <div className="absolute top-[2rem] right-[1.5rem] z-30 text-[1rem]/[1rem] font-medium text-[#FFF]">
              {currentPhotoCount} / {FOUR_CUT_TOTAL}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <StepButton variant="next" onClick={handleCapture}>
          사진촬영
        </StepButton>
      </div>
    </div>
  );
};

export default CameraPage;
