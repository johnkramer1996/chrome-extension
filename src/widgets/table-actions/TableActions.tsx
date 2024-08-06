import { Box, Button, IconButton, Input, InputAdornment, Stack, TextField } from '@mui/material'
import { GrFilter } from 'react-icons/gr'
import { RiDownloadLine } from 'react-icons/ri'
import { IoSearchSharp } from 'react-icons/io5'

export const TableActions = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} spacing={4}>
      <Stack direction={'row'} spacing={4}>
        <Box position={'relative'} width={220}>
          <TextField
            helperText={null}
            placeholder='Search'
            sx={{
              boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
              borderRadius: '1000px',
              backgroundColor: 'rgba(15,15,19, .6)',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            InputProps={{
              sx: { height: 44, border: 'none' },
              startAdornment: (
                <InputAdornment position='start'>
                  <IoSearchSharp size={18} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          color='dark'
          sx={{
            height: 44,
            boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
            backgroundColor: 'rgba(15,15,19, .6)',
            fontSize: 14,
          }}
          startIcon={<GrFilter />}
        >
          Filters
        </Button>
      </Stack>
      <Button
        color='dark'
        sx={{
          height: 44,
          boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
          backgroundColor: 'rgba(15,15,19, .6)',
          fontSize: 16,
        }}
        startIcon={<RiDownloadLine />}
      >
        Download CSV
      </Button>
    </Stack>
  )
}
