import { type CardType } from '../types';

interface CropOptions {
  imageSrc: string;
  cardType?: CardType;
}

export const getCroppedImage = async ({ imageSrc, cardType }: CropOptions): Promise<string> => {
  const image = new Image();
  image.src = imageSrc;

  try {
    await image.decode();
  } catch (err) {
    throw new Error(
      `이미지 디코딩에 실패했습니다: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  const cropWidth = cardType === 'FOUR_CUT' ? 240 : 300;
  const cropHeight = 300;

  const canvas = document.createElement('canvas');
  canvas.width = cropWidth;
  canvas.height = cropHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context를 가져올 수 없습니다.');

  const sx = (image.width - cropWidth) / 2;
  const sy = (image.height - cropHeight) / 2;

  ctx.drawImage(image, sx, sy, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

  return canvas.toDataURL('image/png');
};
