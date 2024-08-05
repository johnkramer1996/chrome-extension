import logo from 'assets/logo.svg'
import GuidesIcon from 'assets/icons/guides.svg'
import SettingsIcon from 'assets/icons/settings.svg'
import { AppBar, Box, Container, IconButton, Stack, Toolbar } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position='static' sx={{ background: 'none', boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 6 }}>
          <Box>
            <Box component={'img'} sx={{ verticalAlign: 'middle' }} src={logo} alt='' />
          </Box>
          <Stack direction={'row'}>
            <IconButton>
              <img src={GuidesIcon} alt='' />
            </IconButton>
            <IconButton>
              <img src={SettingsIcon} alt='' />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
