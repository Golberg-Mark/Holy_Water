import { z } from 'zod';
import t from '@/i18n';

export const emailSchema = z.object({
  email: z
    .string()
    .email(t('EmailInvalidTypeError'))
    .trim()
});

export type EmailSchema = z.infer<typeof emailSchema>;
