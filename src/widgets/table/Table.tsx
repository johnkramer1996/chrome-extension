import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Row } from './Row'

const tr = [
  'Brand',
  'Price',
  'Monthly revenue on amz',
  'units sold',
  'Rating',
  'Optimiz. opprtunities',
  'units sold on tt',
]

export const TableProducts = () => {
  return (
    <Box bgcolor={'#141414'} borderRadius={4} py={4} px={6}>
      <Table sx={{ tableLayout: 'fixed', fontWeight: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell width={280}>Product Name</TableCell>
            {tr.map((el, i) => {
              return (
                <TableCell key={i}>
                  <Box>{el}</Box>
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
