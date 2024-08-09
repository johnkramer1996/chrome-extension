import { BsQuestionCircle } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { Box, BoxProps, IconButton, IconButtonProps, IconProps, Menu, MenuItem, Popover, Stack } from '@mui/material'
import { useState } from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import { IoCloseSharp } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from 'shared/model'
import { selectIsFull, selectIsPopup, toggleExtension, toggleMode } from 'entities/settings'
import { addStyleIfTrue, notifySuccess } from 'shared/lib'
import { selectIsAuth } from 'entities/session'
import { logoutThunk } from 'features/session'

export const Icons = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const isFull = useAppSelector(selectIsFull)
  const dispatch = useAppDispatch()
  const isPopup = useAppSelector(selectIsPopup)

  const iconButtonProps: IconButtonProps = {
    sx: { ...addStyleIfTrue(isPopup, { padding: 1.5 }) },
  }
  const iconProps: BoxProps = {
    sx: { fontSize: 32, ...addStyleIfTrue(isPopup, { fontSize: 22 }) },
  }

  return (
    <Stack direction={'row'}>
      <QuestionIcon iconButtonProps={iconButtonProps} iconProps={iconProps} />
      {isAuth && (
        <>
          <SettingsIcon iconButtonProps={iconButtonProps} iconProps={iconProps} />
        </>
      )}
      <IconButton {...iconButtonProps} onClick={() => dispatch(toggleMode())}>
        {isFull ? (
          <Box component={CloseFullscreenIcon} {...iconProps} />
        ) : (
          <Box component={OpenInFullIcon} {...iconProps} />
        )}
      </IconButton>
      <IconButton {...iconButtonProps} onClick={() => dispatch(toggleExtension())}>
        <Box component={IoCloseSharp} {...iconProps} />
      </IconButton>
    </Stack>
  )
}

type Props = {
  iconButtonProps: IconButtonProps
  iconProps: BoxProps
}

const QuestionIcon = ({ iconButtonProps, iconProps }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Box px={5} pt={3}>
          A fish (pl.: fish or fishes) is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and
          a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more
          common jawed fish, the latter including all living cartilaginous and bony fish
        </Box>
      </Popover>
      <IconButton onClick={handleClick} {...iconButtonProps}>
        <Box component={BsQuestionCircle} {...iconProps} />
      </IconButton>
    </>
  )
}

const SettingsIcon = ({ iconButtonProps, iconProps }: Props) => {
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap()
    } finally {
      notifySuccess('You have successfully logged out')
    }
  }

  return (
    <>
      <IconButton {...iconButtonProps} onClick={handleOpen}>
        <Box component={IoSettingsOutline} {...iconProps} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        // MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}
