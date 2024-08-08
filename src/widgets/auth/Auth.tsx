import { Box, BoxProps, Button, Container, Grid, Typography } from '@mui/material'
import FormImage from 'assets/form-image.png'
import { GoArrowLeft } from 'react-icons/go'
import { ReactNode } from 'react'
import { PATH_PAGE } from 'shared/lib'
import { useNavigate } from 'react-router-dom'

export const Auth = ({ children, hasBackButton }: { children: ReactNode; hasBackButton?: boolean }) => {
  const navigate = useNavigate()

  return (
    <Box pt={2} pb={10}>
      <Container>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xl={6} lg={9} xs={12} sx={{ '@container (max-width: 900px)': { display: 'none' } }}>
            <Box minHeight={60}>
              {hasBackButton && (
                <Button
                  onClick={() => navigate(PATH_PAGE.login)}
                  variant='text'
                  startIcon={<GoArrowLeft size={24} style={{ marginRight: 13 }} />}
                  sx={{ color: '#fff', ml: -5, mt: -1, letterSpacing: '.2px' }}
                >
                  back to log in
                </Button>
              )}
            </Box>
            <AuthIntro pl={16} maxWidth={585} />
          </Grid>
          <Grid
            item
            xl={5}
            lg={3}
            xs={12}
            sx={{
              '@container (max-width: 900px)': {
                flexBasis: '410px',
                maxWidth: '410px',
                margin: '0 auto',
                textAlign: 'center',
              },
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const AuthIntro = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Typography variant='h1' mb={8} fontSize={52}>
        Ecommerce Growth Platform of New Generation
      </Typography>
      <Typography variant='info' maxWidth={503} letterSpacing={'.2px'}>
        Access modern Growth Platform that is disrupting entire space of eCommerce by bringing cutting edge AI to
        effectively manage C level operations and unlock scalable growth.
      </Typography>
      <Box mt={18} height={450} position={'relative'}>
        <Box
          component={'img'}
          position={'absolute'}
          top={0}
          left={'50%'}
          sx={{ transform: 'translate(-50%, 0)' }}
          src={FormImage}
          alt=''
        />
      </Box>
    </Box>
  )
}
