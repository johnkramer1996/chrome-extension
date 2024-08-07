import { BsQuestionCircle } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { IconButton, Popover, Stack } from '@mui/material'
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

  const iconSize = isFull ? 32 : 24

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
      <IconButton
        onClick={handleClick}
        sx={{
          '@container (max-width: 900px)': {
            padding: '0',
          },
        }}
      >
        <BsQuestionCircle size={iconSize} />
      </IconButton>
      {isAuth && (
        <IconButton>
          <IoSettingsOutline size={iconSize} />
        </IconButton>
      )}
      <IconButton onClick={() => dispatch(toggleMode())}>
        {isFull ? (
          <CloseFullscreenIcon
            sx={{
              fontSize: iconSize,
              '@container (max-width: 900px)': {
                fontSize: 24,
              },
            }}
          />
        ) : (
          <OpenInFullIcon sx={{ fontSize: iconSize }} />
        )}
      </IconButton>
      <IconButton>
        <IoCloseSharp size={iconSize} />
      </IconButton>
    </Stack>
  )
}
