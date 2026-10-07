import OpenAI from 'openai';

import type { PromptType } from '../types';

const prompt = {
  디즈니: `A 3D animated portrait in the exact style of a Disney or Pixar character, inspired by movies like Tangled, Frozen, and Encanto. The character has extremely large and expressive eyes, a small nose, soft rounded facial features, and slightly exaggerated proportions. The skin is flawless and glowing, with soft lighting and a dreamy fairytale color palette. The expression is kind and charming, like a Disney princess or prince. Rendered with cinematic lighting and studio-quality background. Stylized, not realistic. Disney 3D animation look, not anime or cartoon.`,
  마인크래프트: `Convert this image into Minecraft style: voxel art, pixelated blocks, low resolution textures, cubic shapes, blocky environment, bright lighting, 2D Minecraft aesthetic. Not divided, but forming a single mass.`,
  스누피: `Face illustration in Peanuts cartoon style, minimal lines, round head, small dot eyes, simple mouth, flat colors, inspired by Snoopy and Charlie Brown comics. No shading, no realism.`,
  심슨: `Draw this person as an original character in a classic American TV sitcom cartoon style. Use flat 2D cartoon style with thick black outlines and a limited, saturated color palette. The character must have bright yellow skin, large round white eyes with small black pupils, a slight overbite, and a friendly, cheerful expression. Style the hair in simple blocky or spiky cartoon shapes. Use only flat shading — no gradients or 3D effects. Plain, simple suburban background. No realism, no anime, no webtoon.`,
  레고: `Transform the person into a LEGO Minifigure character with a cylindrical head, printed face, blocky body, LEGO-style hair, and glossy plastic colors; do not create a brick-built scene, focus only on the character.`,
} as const;

interface generateAiImageProps {
  imageUrl: string;
  selectedPrompt: PromptType;
}

const generateAiImage = async ({
  imageUrl,
  selectedPrompt,
}: generateAiImageProps): Promise<string> => {
  try {
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    // 촬영 이미지는 data URL이므로 업로드 가능한 File로 변환
    const imageBlob = await (await fetch(imageUrl)).blob();
    const imageFile = new File([imageBlob], 'photo.png', { type: imageBlob.type });

    const img = await openai.images.edit({
      model: 'gpt-image-2.5-flare-2026-09-08',
      quality: 'low',
      image: imageFile,
      prompt: `Redraw the person in this photo in the following style, keeping their pose, hairstyle, outfit and composition. ${prompt[selectedPrompt!]}`,
      n: 1,
      size: '1024x1024',
    });

    // gpt-image 계열은 url 대신 base64(b64_json)로만 응답
    const b64 = img.data?.[0]?.b64_json;
    return b64 ? `data:image/png;base64,${b64}` : '';
  } catch (err) {
    console.error(err);
    return '';
  }
};

export default generateAiImage;
