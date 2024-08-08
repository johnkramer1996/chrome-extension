// import { Box, BoxProps } from '@mui/material'
// import { selectIsFull } from 'entities/settings'
// import { ReactNode, useRef } from 'react'
// import { useAppSelector } from 'shared/model'
// import { motion } from 'framer-motion'

// export const DraggableLayout = ({ children }: { children: ReactNode }) => {
//   const constraintsRef = useRef(null)
//   const isFull = useAppSelector(selectIsFull)

//   const defaultBoxProps: BoxProps = {
//     position: 'relative',
//     sx: {},
//   }
//   const boxProps: BoxProps = {
//     ...defaultBoxProps,
//     ...(isFull
//       ? { sx: { ...defaultBoxProps.sx, transform: 'none!important' } }
//       : {
//           sx: { ...defaultBoxProps.sx, containerType: 'inline-size' },
//         }),
//   }

//   return (
//     <Box
//       position={'fixed'}
//       top={0}
//       left={0}
//       right={0}
//       sx={{
//         '&': {
//           height: 0,
//           width: 0,
//           zIndex: 999,
//         },
//         '& .container': {
//           minWidth: '100vw',
//           minHeight: '100vh',
//           // display: 'flex',
//           // placeContent: 'center',
//           // placeItems: 'center',
//         },
//         '& .item': {
//           display: 'inbline-block',
//           width: '820px',
//           height: '600px',
//           maxHeight: '100vh',
//           overflow: 'auto scroll',
//           borderRadius: 3,
//           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//           position: 'relative',
//           background:
//             'linear-gradient(295.01deg, #92c5ff 2.69%, rgba(59, 78, 106, 0.814312) 10.71%, rgba(5, 5, 15, 0.7) 23.66%, #05050f 36.23%, rgba(5, 5, 15, 0.6) 66.55%, rgba(64, 86, 116, 0.769137) 83.87%, #92c5ff 94.18%   );',
//           bgcolor: '#05050F',
//         },
//       }}
//     >
//       {/* <motion.div className='container' ref={constraintsRef}> */}
//       <motion.div className='item' drag={!isFull} dragConstraints={'body'}>
//         <Box {...boxProps}>{children}</Box>
//       </motion.div>
//       {/* </motion.div> */}
//     </Box>
//   )
// }
