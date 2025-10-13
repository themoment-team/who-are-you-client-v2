export const cropImage = async (imageSrc: string, cropSize: number): Promise<string> => {
  const image = new Image();
  image.src = imageSrc;

  await image.decode();

  const canvas = document.createElement('canvas');
  canvas.width = cropSize;
  canvas.height = cropSize;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context를 가져올 수 없습니다.');

  const sx = (image.width - cropSize) / 2;
  const sy = (image.height - cropSize) / 2;

  ctx.drawImage(image, sx, sy, cropSize, cropSize, 0, 0, cropSize, cropSize);

  return canvas.toDataURL('image/png');
};
