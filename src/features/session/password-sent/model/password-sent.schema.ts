import { z } from 'zod'

export const passwordSentFormSchema = z.object({
  code: z.string().length(6),
})

export type PasswordSentFormSchema = z.infer<typeof passwordSentFormSchema>
