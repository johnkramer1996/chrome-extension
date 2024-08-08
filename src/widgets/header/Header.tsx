import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { Logo } from './Logo'
import { Icons } from './Icons'
import { useAppSelector } from 'shared/model'
import { selectIsPopup } from 'entities/settings'
import { addStyleIfTrue } from 'shared/lib'

export const Header = () => {
  const isPopup = useAppSelector(selectIsPopup)

  return (
    <AppBar position='static' sx={{ background: 'none', boxShadow: 'none' }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            py: 6,
            minHeight: '1px!important',
            ...addStyleIfTrue(isPopup, { py: 2 }),
          }}
        >
          <Logo />
          <Icons />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
