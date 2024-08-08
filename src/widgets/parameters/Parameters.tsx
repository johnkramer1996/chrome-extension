import { Box, Stack } from '@mui/material'

export const Parameters = () => {
  return (
    <Stack
      position={'absolute'}
      bottom={0}
      left={0}
      right={0}
      direction={'row'}
      justifyContent={'space-between'}
      spacing={2}
      mt={1}
      pl={9}
      pr={4}
      sx={{
        '@container (max-width: 900px)': {
          pl: 0,
          pr: 0,
        },
      }}
    >
      <Box>
        <Box
          color={'#B5B5B5'}
          fontSize={14}
          sx={{
            '@container (max-width: 900px)': {
              fontSize: 12,
            },
          }}
        >
          Parameter 1
        </Box>
        <Box
          color={'#FE5858'}
          fontSize={24}
          fontWeight={500}
          sx={{
            '@container (max-width: 900px)': {
              fontSize: 20,
            },
          }}
        >
          $350,39
        </Box>
      </Box>
      <Box>
        <Box
          color={'#B5B5B5'}
          fontSize={14}
          sx={{
            '@container (max-width: 900px)': {
              fontSize: 12,
            },
          }}
        >
          Parameter 2
        </Box>
        <Box
          color={'#8AFF6C'}
          fontSize={24}
          fontWeight={500}
          sx={{
            '@container (max-width: 900px)': {
              fontSize: 20,
            },
          }}
        >
          $1.350,39
        </Box>
      </Box>
    </Stack>
  )
}
