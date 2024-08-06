import { z } from 'zod'

export const passwordResetFormSchema = z.object({
  email: z.string().email(),
})

export type PasswordResetFormSchema = z.infer<typeof passwordResetFormSchema>
