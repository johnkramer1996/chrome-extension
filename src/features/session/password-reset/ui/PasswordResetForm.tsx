import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Stack } from '@mui/material'
import { GoArrowRight } from 'react-icons/go'
import { ControlledInput } from 'shared/ui'
import { passwordResetFormSchema, PasswordResetFormSchema } from '../model/password-reset.schema'

export const PasswordResetForm = ({ onComplete }: { onComplete?: () => void }) => {
  const methods = useForm<PasswordResetFormSchema>({
    resolver: zodResolver(passwordResetFormSchema),
    criteriaMode: 'all',
    defaultValues: { email: '' },
  })

  const handleSubmit = useCallback(async (data: PasswordResetFormSchema) => {
    // logic
    onComplete && onComplete()
    notifySuccess('You have successfully reset password')
  }, [])

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={6}>
            <ControlledInput<PasswordResetFormSchema> name='email' label='your e-mail' fullWidth />
            <Box textAlign={'center'}>
              <Button type='submit' size='large' sx={{ maxWidth: 300 }} endIcon={<GoArrowRight />} fullWidth>
                send me a new password
              </Button>
            </Box>
          </Stack>
        </FormProvider>
      </form>
    </>
  )
}
