import { Box, Typography } from '@mui/material'
import { PasswordResetForm, PasswordSentForm } from 'features/session'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'
import { Auth } from 'widgets'

export const PasswordResetPage = () => {
  const [sentResetPassword, setSentResetPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <Auth hasBackButton>
      {sentResetPassword === false ? (
        <>
          <Typography variant={'h1'} component={'h2'} mb={4} textAlign={'center'}>
            Password reset
          </Typography>
          <PasswordResetForm onComplete={() => setSentResetPassword(true)} />
        </>
      ) : (
        <Box maxWidth={392} ml={'auto'}>
          <Typography variant={'h1'} component={'h2'} mb={4} textAlign={'center'}>
            Password sent
          </Typography>
          <Typography variant={'info'} mb={4} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Typography>
          <PasswordSentForm onComplete={() => navigate(PATH_PAGE.login)} />
        </Box>
      )}
    </Auth>
  )
}
