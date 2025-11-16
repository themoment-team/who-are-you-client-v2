export type CardType = 'BUSINESS_CARD' | 'FOUR_CUT';

export interface BusinessCardProps {
  name: string;
  major: string;
  email: string;
  tel: string;
  imageUrl: string;
  onImageClick: () => void;
  isClickable?: boolean;
}

export interface FourCutProps {
  imageUrls: string[];
  onImageClick: (index: number) => void;
  isClickable?: boolean;
  convertingIndices?: Set<number>;
}
