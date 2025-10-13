export type CardType = 'BUSINESS_CARD' | 'FOUR_CUT';

export interface BusinessCardProps {
  name: string;
  major: string;
  email: string;
  tel: string;
  imageSrc: string;
  onImageClick: () => void;
}

export interface FourCutProps {
  imageSrcs: string[];
  onImageClick: () => void;
}
