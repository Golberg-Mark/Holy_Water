import { z } from 'zod';
import i18n from '@/i18n.ts';

export const emailSchema = z.object({
  email: z
    .string()
    .email(i18n.t('EmailInvalidTypeError'))
    .trim()
});

export type EmailSchema = z.infer<typeof emailSchema>;
