import { z } from 'zod';

export const userInfoFormSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  tel: z
    .string()
    .min(1, '전화번호를 입력해주세요')
    .regex(/^\d{9,11}$/, {
      message: '하이픈(-) 없이 숫자 9~11자리로 입력해주세요',
    }),
  email: z.string().email('유효한 이메일 주소를 입력해주세요').or(z.literal('')),
  major: z.string().or(z.literal('')),
});
