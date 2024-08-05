import SearchIcon from 'assets/icons/search.svg'
import FilterIcon from 'assets/icons/filter.svg'
import DownloadIcon from 'assets/icons/download.svg'
import { Box, Button, Input, Stack } from '@mui/material'

export const Actions = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} spacing={4}>
      <Stack direction={'row'} spacing={4}>
        <Box position={'relative'} width={220}>
          <Box
            position={'absolute'}
            top={'50%'}
            left={13}
            lineHeight={1}
            sx={{
              transform: 'translate(0, -50%)',
              mt: -0.5,
              zIndex: '3',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <Box component={'img'} src={SearchIcon} alt='' />
          </Box>
          <Input placeholder='Seach' sx={{ pl: 10 }} fullWidth />
        </Box>
        <Box>
          <Button startIcon={<img src={FilterIcon} alt='' />}>Filters</Button>
        </Box>
      </Stack>
      <Box>
        <Button sx={{ fontSize: 16 }} startIcon={<img src={DownloadIcon} alt='' />}>
          Download CSV
        </Button>
      </Box>
    </Stack>
  )
}
