import { BsQuestionCircle } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { Box, BoxProps, IconButton, IconButtonProps, Popover, Stack } from '@mui/material'
import { useState } from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import { IoCloseSharp } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from 'shared/model'
import { selectIsFull, toggleMode } from 'entities/settings'

export const Icons = () => {
  const isAuth = true //  = useAppSelector(selectIsAuth)
  const isFull = useAppSelector(selectIsFull)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const iconButtonProps: IconButtonProps = {
    sx: { '@container (max-width: 900px)': { padding: 1.5 } },
  }
  const iconProps: BoxProps = {
    sx: { fontSize: 32, '@container (max-width: 900px)': { fontSize: 22 } },
  }

  return (
    <Stack direction={'row'}>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        A fish (pl.: fish or fishes) is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and a
        hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more
        common jawed fish, the latter including all living cartilaginous and bony fish
      </Popover>
      <IconButton onClick={handleClick} {...iconButtonProps}>
        <Box component={BsQuestionCircle} {...iconProps} />
      </IconButton>
      {isAuth && (
        <IconButton {...iconButtonProps}>
          <Box component={IoSettingsOutline} {...iconProps} />
        </IconButton>
      )}
      <IconButton {...iconButtonProps} onClick={() => dispatch(toggleMode())}>
        {isFull ? (
          <Box component={CloseFullscreenIcon} {...iconProps} />
        ) : (
          <Box component={OpenInFullIcon} {...iconProps} />
        )}
      </IconButton>
      {/* TODO: ADD OPEN BUTTON */}
      {/* onClick={() => dispatch(toggleExtension())} */}
      <IconButton {...iconButtonProps}>
        <Box component={IoCloseSharp} {...iconProps} />
      </IconButton>
    </Stack>
  )
}
