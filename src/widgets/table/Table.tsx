import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Row } from './Row'

const tr = [
  'Brand',
  'Price',
  'Monthly revenue on amz',
  'units<br /> sold',
  'Rating',
  'Optimiz. opprtunities',
  'units sold on tt',
]

export const TableProducts = () => {
  return (
    <Box
      bgcolor={'#141414'}
      borderRadius={4}
      py={4}
      px={6}
      sx={{
        '@container (max-width: 900px)': {
          px: 1,
        },
      }}
    >
      <Table
        sx={{
          tableLayout: 'fixed',
          fontWeight: 300,
          '@container (max-width: 900px)': {
            tableLayout: 'auto',
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: 280,
                '@container (max-width: 900px)': {
                  width: 150,
                  fontSize: 10,
                },
              }}
            >
              Product Name
            </TableCell>
            {tr.map((el, i) => {
              return (
                <TableCell
                  key={i}
                  sx={{
                    '@container (max-width: 900px)': {
                      fontSize: 10,
                      padding: '2px 1px',
                      maxWidth: 75,
                    },
                  }}
                >
                  <Box dangerouslySetInnerHTML={{ __html: el }}></Box>
                </TableCell>
              )
            })}
            <TableCell width={40} />
          </TableRow>
        </TableHead>
        <TableBody>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </TableBody>
      </Table>
    </Box>
  )
}
