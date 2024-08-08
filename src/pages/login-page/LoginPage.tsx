import { Box, Typography } from '@mui/material'
import { LoginForm } from 'features/session'
import { Auth } from 'widgets'

export const LoginPage = () => {
  return (
    <Auth>
      <Box
        maxWidth={376}
        ml={'auto'}
        mr={20}
        mt={-8}
        sx={{
          '@container (max-width: 900px)': { maxWidth: '100%', mr: 'auto', ml: 'auto', mt: 7 },
        }}
      >
        <Typography
          variant={'h1'}
          component={'h2'}
          fontSize={48}
          mb={24}
          textAlign={'center'}
          sx={{
            '@container (max-width: 900px)': { mb: 10, fontSize: 32 },
          }}
        >
          Welcome back!
        </Typography>
        <LoginForm />
      </Box>
    </Auth>
  )
}
