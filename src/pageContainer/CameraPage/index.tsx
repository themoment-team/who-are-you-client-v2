import { useRef } from 'react';

import Webcam from 'react-webcam';

import BusinessCardCameraGuide from '../../assets/BusinessCardCameraGuide';
import { StepButton } from '../../components';
import { cropImage } from '../../hooks/useCropImage';
import { STEP, type Step } from '../../types';

interface CameraPageProps {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const CROP_SIZE = 300;
const VIDEO_CONSTRAINTS = { facingMode: 'user', width: 1280, height: 720 } as const;

const CameraPage = ({ setStep, setImageUrl }: CameraPageProps) => {
  const webcamRef = useRef<Webcam>(null);

  const handleCapture = async () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      const croppedImageUrl = await cropImage(imageSrc, CROP_SIZE);
      setImageUrl(croppedImageUrl);
      setStep(STEP.AI_CONVERSION);
    } catch (err) {
      console.error('이미지 처리 오류:', err);
    }
  };

  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <div className="mb-[3rem] flex flex-col gap-4">
        <h1 className="text-[2.25rem] font-extrabold">사진 촬영</h1>
        <p className="text-[1.25rem]/[1.875rem] font-medium text-[#666]">
          화면 중앙의 가이드에 맞춰 얼굴을 촬영해주세요.
          <br />
          촬영된 사진은 AI 이미지 변환에 사용됩니다.
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
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <BusinessCardCameraGuide />
          </div>
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
