import { Box, Typography } from '@mui/material'
import { LoginForm } from 'features/session'
import { Auth } from 'widgets'

export const LoginPage = () => {
  return (
    <Auth>
      <Box maxWidth={376} ml={'auto'} mr={20} mt={-8}>
        <Typography variant={'h1'} component={'h2'} fontSize={48} mb={24} textAlign={'center'}>
          Welcome back!
        </Typography>
        <LoginForm />
      </Box>
    </Auth>
  )
}
