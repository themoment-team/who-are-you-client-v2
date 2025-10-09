export type CardType = 'BUSINESS_CARD' | 'FOUR_CUT';

export interface BusinessCardProps {
  name: string;
  role: string;
  major: string;
  email: string;
  tel: string;
  imageSrc: string;
}

export interface FourCutProps {
  imageSrcs: string[];
}
