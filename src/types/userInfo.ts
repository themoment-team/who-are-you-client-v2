import type { z } from 'zod';

import type { userInfoFormSchema } from '../schemas/userInfoFormSchema';

export type userInfoFormType = z.infer<typeof userInfoFormSchema>;
