import { Box } from '@mui/material'
import { selectIsFull } from 'entities/settings'
import React, { ReactNode, useRef } from 'react'
import Draggable from 'react-draggable'
import { useAppSelector } from 'shared/model'

const sx = {
  background:
    'linear-gradient(295.01deg, #92c5ff 2.69%, rgba(59, 78, 106, 0.814312) 10.71%, rgba(5, 5, 15, 0.7) 23.66%, #05050f 36.23%, rgba(5, 5, 15, 0.6) 66.55%, rgba(64, 86, 116, 0.769137) 83.87%, #92c5ff 94.18%   );',
}

export const DraggableLayout = ({ children }: { children: ReactNode }) => {
  const nodeRef = useRef(null)
  const isFull = useAppSelector(selectIsFull)

  return (
    <Box position={'absolute'} top={0} left={0} right={0} zIndex={9999}>
      {isFull === false ? (
        <Draggable nodeRef={nodeRef} bounds='body' defaultPosition={{ x: 0, y: 0 }}>
          <Box
            ref={nodeRef}
            width={820}
            maxHeight={'100vh'}
            height={600}
            borderRadius={3}
            sx={{ ...sx, containerType: 'inline-size' }}
            overflow={'auto scroll'}
          >
            {children}
          </Box>
        </Draggable>
      ) : (
        <Draggable nodeRef={nodeRef} bounds='body' defaultPosition={{ x: 0, y: 0 }} onStart={() => false}>
          <Box
            sx={{
              ...sx,
              transform: 'none!important',
            }}
          >
            {children}
          </Box>
        </Draggable>
      )}
    </Box>
  )
}
