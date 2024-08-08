import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { Logo } from './Logo'
import { Icons } from './Icons'

export const Header = () => {
  return (
    <AppBar position='static' sx={{ background: 'none', boxShadow: 'none' }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            py: 6,
            minHeight: '1px!important',
            '@container (max-width: 900px)': { py: 2 },
          }}
        >
          <Logo />
          <Icons />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
