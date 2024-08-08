import { Box, Button, Container, Stack } from '@mui/material'
import { TableActions, TableProducts } from 'widgets'
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
import 'assets/fonts/plain/style.css'

export const MainPage = () => (
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
