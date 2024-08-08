import { Box, Button, Typography } from '@mui/material'
import { PasswordResetForm, PasswordSentForm } from 'features/session'
import { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'
import { Auth } from 'widgets'

export const PasswordResetPage = () => {
  const [sentResetPassword, setSentResetPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <Auth hasBackButton>
      {sentResetPassword === false ? (
        <Box
          pb={40}
          sx={{
            '@container (max-width: 900px)': {
              pb: 0,
            },
          }}
        >
          <Typography
            variant={'h1'}
            component={'h2'}
            mb={4}
            textAlign={'center'}
            sx={{
              '@container (max-width: 900px)': {
                fontSize: 32,
              },
            }}
          >
            Password reset
          </Typography>
          <PasswordResetForm onComplete={() => setSentResetPassword(true)} />
        </Box>
      ) : (
        <Box
          maxWidth={392}
          ml={'auto'}
          pb={40}
          sx={{
            '@container (max-width: 900px)': {
              mr: 'auto',
              maxWidth: '100%',
              pb: 0,
            },
          }}
        >
          <Typography
            variant={'h1'}
            component={'h2'}
            mb={4}
            textAlign={'center'}
            sx={{
              '@container (max-width: 900px)': {
                fontSize: 32,
              },
            }}
          >
            Password sent
          </Typography>
          <Typography variant={'info'} mb={4} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Typography>
          <PasswordSentForm onComplete={() => navigate(PATH_PAGE.login)} />
        </Box>
      )}
      <Button
        onClick={() => navigate(PATH_PAGE.login)}
        variant='text'
        startIcon={<GoArrowLeft size={24} style={{ marginRight: 13 }} />}
        sx={{ color: '#fff', mt: 5 }}
      >
        back to log in
      </Button>
    </Auth>
  )
}
