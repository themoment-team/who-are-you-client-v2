import { z } from 'zod';

export const userInfoFormSchema = z.object({
  name: z.string().min(1, '한 글자 이상 입력해주세요'),
  tel: z.string().regex(/^01[0-9]\d{7,8}$/, '-(하이픈) 없이 입력해주세요'),
  email: z.string().email('유효한 이메일 주소를 입력해주세요').optional().or(z.literal('')),
  major: z.string().optional().or(z.literal('')),
});
