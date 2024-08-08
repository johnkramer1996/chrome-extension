import { notifySuccess } from 'shared/lib/notify'
import { useCallback, useState } from 'react'
import { LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, IconButton, InputAdornment, Link as LinkMui, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'
import { FaGoogle } from 'react-icons/fa'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { GoArrowRight } from 'react-icons/go'
import { ControlledInput } from 'shared/ui'
import { setSessionData } from 'entities/session'
import { useDispatch } from 'react-redux'

export const LoginForm = () => {
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    criteriaMode: 'all',
    defaultValues: { email: '', password: '' },
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmitHandler = useCallback(async (data: LoginFormSchema) => {
    dispatch(setSessionData({ isAuth: true, accessToken: '', refreshToken: '' }))
    navigate(PATH_PAGE.root)
    notifySuccess('You have successfully logged in')
  }, [])

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <Stack spacing={6} sx={{ '@container (max-width: 900px)': { '& >:not(style)~:not(style)': { mt: 4 } } }}>
            <ControlledInput<LoginFormSchema> name='email' type={'text'} label='E-mail' fullWidth />
            <ControlledInput<LoginFormSchema>
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <MdOutlineVisibility size={18} /> : <MdOutlineVisibilityOff size={18} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant='info' mt={'2px!important'} textAlign={'left'}>
              <LinkMui component={Link} to={PATH_PAGE.passwordReset}>
                I forgot my password
              </LinkMui>
            </Typography>
            <Box textAlign={'center'}>
              <Button type='submit' sx={{ maxWidth: 300 }} endIcon={<GoArrowRight />} fullWidth>
                Log in
              </Button>
            </Box>
          </Stack>
        </FormProvider>
      </form>
      <Stack spacing={22.5} mt={22.5} maxWidth={300} mx={'auto'} sx={{ '@container (max-width: 900px)': { mt: 8 } }}>
        <Button
          color='green'
          sx={{
            bgcolor: 'rgba(128, 198, 122, .2)',
            color: 'green.main',
            '&:hover': { bgcolor: 'rgba(128, 198, 122, .4)', color: 'green.main' },
            '&:active': { boxShadow: '0px 0px 20px rgba(128, 198, 122, 0.4)' },
            '@container (max-width: 900px)': { height: 40 },
          }}
          size='large'
          fullWidth
          endIcon={<FaGoogle size={16} />}
        >
          Log In with google
        </Button>
        <Stack
          spacing={5}
          textAlign={'center'}
          sx={{
            '@container (max-width: 900px)': {
              '& >:not(style)~:not(style)': { mt: 2 },
              mt: '32px!important',
              '& br': { display: 'none' },
            },
          }}
        >
          <Typography variant='info'>
            By signing up, i acknowledge that i have <br />
            read and agree to the <LinkMui>Terms and Conditions</LinkMui> <br />
            and <LinkMui>Privacy Policy.</LinkMui>
          </Typography>
          <Typography variant='info'>
            Don’t you have an account yet?{' '}
            <LinkMui component={Link} to={PATH_PAGE.register}>
              Then register
            </LinkMui>
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}
