import { Box, SxProps, Typography } from '@mui/material'
import { selectIsFull, selectIsPopup } from 'entities/settings'
import { LoginForm } from 'features/session'
import { addStyleIfTrue } from 'shared/lib'
import { useAppSelector } from 'shared/model'
import { Auth } from 'widgets'

export const LoginPage = () => {
  const isPopup = useAppSelector(selectIsPopup)

  return (
    <Auth>
      <Box
        maxWidth={376}
        ml={'auto'}
        mr={20}
        mt={-8}
        sx={{ ...addStyleIfTrue(isPopup, { maxWidth: '100%', mr: 'auto', ml: 'auto', mt: 7 }) }}
      >
        <Typography
          variant={'h1'}
          component={'h2'}
          fontSize={48}
          mb={24}
          textAlign={'center'}
          sx={{ ...addStyleIfTrue(isPopup, { mb: 10, fontSize: 32 }) }}
        >
          Welcome back!
        </Typography>
        <LoginForm />
      </Box>
    </Auth>
  )
}
