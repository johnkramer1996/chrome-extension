import { Box, Stack } from '@mui/material'
import { selectIsPopup } from 'entities/settings'
import { addStyleIfTrue } from 'shared/lib'
import { useAppSelector } from 'shared/model'

export const Parameters = () => {
  const isPopup = useAppSelector(selectIsPopup)

  return (
    <Stack
      position={'absolute'}
      bottom={0}
      left={0}
      right={0}
      direction={'row'}
      justifyContent={'space-between'}
      spacing={2}
      pl={9}
      pr={6}
      sx={{ ...addStyleIfTrue(isPopup, { pl: 0, pr: 0 }) }}
    >
      <Box>
        <Box color={'#B5B5B5'} lineHeight={1.3} fontSize={14} sx={{ ...addStyleIfTrue(isPopup, { fontSize: 12 }) }}>
          Parameter 1
        </Box>
        <Box
          color={'#FE5858'}
          lineHeight={1.3}
          fontSize={24}
          fontWeight={500}
          sx={{ ...addStyleIfTrue(isPopup, { fontSize: 20 }) }}
        >
          $350,39
        </Box>
      </Box>
      <Box>
        <Box color={'#B5B5B5'} lineHeight={1.3} fontSize={14} sx={{ ...addStyleIfTrue(isPopup, { fontSize: 12 }) }}>
          Parameter 2
        </Box>
        <Box
          color={'#8AFF6C'}
          lineHeight={1.3}
          fontSize={24}
          fontWeight={500}
          sx={{ ...addStyleIfTrue(isPopup, { fontSize: 20 }) }}
        >
          $1.350,39
        </Box>
      </Box>
    </Stack>
  )
}
