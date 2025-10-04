export const STEP = {
  START: 'START',
  CAMERA: 'CAMERA',
  AI_CONVERSION: 'AI_CONVERSION',
  INFO_INPUT: 'INFO_INPUT',
  THEME_SELECT: 'THEME_SELECT',
} as const;

export type Step = (typeof STEP)[keyof typeof STEP];
