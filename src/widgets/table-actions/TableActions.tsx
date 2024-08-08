import { Box, Button, ButtonProps, InputAdornment, Stack, TextField } from '@mui/material'
import { GrFilter } from 'react-icons/gr'
import { RiDownloadLine } from 'react-icons/ri'
import { IoSearchSharp } from 'react-icons/io5'

export const TableActions = () => {
  const buttonProps: ButtonProps = {
    sx: {
      height: { lg: 44, xs: 40 },
      boxShadow: '0px 0px 15px rgba(82, 149, 224, 0.5)',
      backgroundColor: 'rgba(15,15,19, .6)',
      fontSize: 14,
      textTransform: 'none',
      fontWeight: 400,
      '&:hover': { boxShadow: '0px 0px 5px rgba(82, 149, 224, 0.5)' },
      '@container (max-width: 900px)': { height: 40, fontSize: 14 },
    },
  }

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
              sx: {
                height: { lg: 44, xs: 40 },
                border: 'none',
                '& input::placeholder': { color: '#fff', opacity: '1' },
                '@container (max-width: 900px)': { height: 40 },
              },
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
          {...buttonProps}
          startIcon={
            <Box component={GrFilter} sx={{ '@container (max-width: 900px)': { fontSize: '16px!important' } }} />
          }
        >
          Filters
        </Button>
      </Stack>
      <Button
        color='dark'
        {...buttonProps}
        sx={{
          ...buttonProps.sx,
          fontSize: 16,
        }}
        startIcon={
          <Box component={RiDownloadLine} sx={{ '@container (max-width: 900px)': { fontSize: '20px!important' } }} />
        }
      >
        Download CSV
      </Button>
    </Stack>
  )
}
