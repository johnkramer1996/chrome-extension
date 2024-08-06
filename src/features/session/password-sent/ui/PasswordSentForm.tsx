import { notifySuccess } from 'shared/lib/notify'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Link, Stack } from '@mui/material'
import { GoArrowRight } from 'react-icons/go'
import { ControlledInput } from 'shared/ui'
import { passwordSentFormSchema, PasswordSentFormSchema } from '../model/password-sent.schema'

export const PasswordSentForm = ({ onComplete }: { onComplete?: () => void }) => {
  const methods = useForm<PasswordSentFormSchema>({
    resolver: zodResolver(passwordSentFormSchema),
    criteriaMode: 'all',
    defaultValues: { code: '' },
  })
  const [visibleResentCode, setVisibleResentCode] = useState(true)

  const handleSubmit = useCallback(async (data: PasswordSentFormSchema) => {
    // logic
    onComplete && onComplete()
    notifySuccess('You have successfully reset password')
  }, [])

  const handleResent = () => {
    setVisibleResentCode(false)
    notifySuccess('You have successfully resent code')
  }

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={6}>
            <ControlledInput<PasswordSentFormSchema> name='code' label='Code' fullWidth />
            <Box textAlign={'center'}>
              {visibleResentCode ? (
                <Stack direction='row' justifyContent={'space-between'} mb={5}>
                  <Box>Didn't receive the code?</Box>
                  <Box>
                    <Link onClick={handleResent} sx={{ cursor: 'pointer' }}>
                      Click to resend
                    </Link>
                  </Box>
                </Stack>
              ) : (
                <Box mb={5}>
                  <Link>
                    Send the code again in <CountDown />
                  </Link>
                </Box>
              )}

              <Button type='submit' size='large' sx={{ maxWidth: 300 }} endIcon={<GoArrowRight />} fullWidth>
                Continue
              </Button>
            </Box>
          </Stack>
        </FormProvider>
      </form>
    </>
  )
}

const CountDown = () => {
  const [time, setTime] = useState(30)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        if (time - 1 === 0) clearInterval(timer)
        return time - 1
      })
    }, 1000)
  }, [])

  return (
    <>
      {`${Math.floor(time / 60)}`.padStart(2, '0')}:{`${time % 60}`.padStart(2, '0')}
    </>
  )
}
