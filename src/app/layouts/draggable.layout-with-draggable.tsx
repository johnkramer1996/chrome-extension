import { Box, BoxProps } from '@mui/material'
import { selectIsFull } from 'entities/settings'
import { ReactNode, useRef } from 'react'
import Draggable, { DraggableProps } from 'react-draggable'
import { useAppSelector } from 'shared/model'

export const DraggableLayout = ({ children }: { children: ReactNode }) => {
  const nodeRef = useRef(null)
  const isFull = useAppSelector(selectIsFull)

  const defaultDraggableProps: Partial<DraggableProps> = { defaultPosition: { x: 0, y: 0 }, bounds: 'body', nodeRef }
  const draggableProps: Partial<DraggableProps> = {
    ...defaultDraggableProps,
    ...(isFull ? { onStart: () => false } : {}),
  }

  const defaultBoxProps: BoxProps = {
    ref: nodeRef,
    position: 'relative',
    zIndex: 999,
    sx: {
      background:
        'linear-gradient(295.01deg, #92c5ff 2.69%, rgba(59, 78, 106, 0.814312) 10.71%, rgba(5, 5, 15, 0.7) 23.66%, #05050f 36.23%, rgba(5, 5, 15, 0.6) 66.55%, rgba(64, 86, 116, 0.769137) 83.87%, #92c5ff 94.18%   );',
      bgcolor: '#05050F',
    },
    height: '100vh',
  }
  const boxProps: BoxProps = {
    ...defaultBoxProps,
    ...(isFull
      ? {
          sx: { ...defaultBoxProps.sx, transform: 'none!important' },
        }
      : {
          sx: { ...defaultBoxProps.sx, containerType: 'inline-size' },
          width: 820,
          height: 600,
          borderRadius: 3,
          overflow: 'auto scroll',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }),
  }

  return (
    <Box position={'fixed'} top={0} left={0} right={0}>
      <Draggable {...draggableProps}>
        <Box {...boxProps}>{children}</Box>
      </Draggable>
    </Box>
  )
}
