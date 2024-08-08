import { Box, Button, Container, Stack } from '@mui/material'
import { TableActions, TableProducts } from 'widgets'

export const MainPage = () => {
  return (
    <>
      <Box pt={5} pb={12}>
        <Container>
          <Stack spacing={5}>
            <TableActions />
            <TableProducts />
            <Button color='primary' sx={{ textTransform: 'uppercase' }}>
              load more
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
