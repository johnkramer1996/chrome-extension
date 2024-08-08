import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Row } from './Row'
import { useAppSelector } from 'shared/model'
import { selectIsPopup } from 'entities/settings'
import { addStyleIfTrue } from 'shared/lib'

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
  const isPopup = useAppSelector(selectIsPopup)

  return (
    <Box bgcolor={'#141414'} borderRadius={4} py={4} px={6} sx={{ ...addStyleIfTrue(isPopup, { px: 1 }) }}>
      <Table
        sx={{
          tableLayout: 'fixed',
          fontWeight: 300,
          ...addStyleIfTrue(isPopup, { tableLayout: 'auto' }),
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 280, ...addStyleIfTrue(isPopup, { width: 150, fontSize: 10 }) }}>
              Product Name
            </TableCell>
            {tr.map((el, i) => {
              return (
                <TableCell
                  key={i}
                  sx={{ ...addStyleIfTrue(isPopup, { fontSize: 10, padding: '2px 1px', maxWidth: 75 }) }}
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
