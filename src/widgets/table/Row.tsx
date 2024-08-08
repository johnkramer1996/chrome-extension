import {
  Box,
  Card,
  CardContent,
  CardContentProps,
  Collapse,
  Grid,
  IconButton,
  Stack,
  TableCell,
  TableCellProps,
  TableRow,
  Typography,
} from '@mui/material'
import FlagsUSA from 'assets/icons/flags-USA.svg'
import ProcuctImage from 'assets/products/product-1.jpg'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { RadarChart, PieChart } from 'widgets'
import { IoMdStar } from 'react-icons/io'
import { PiCopySimple } from 'react-icons/pi'
import { CgArrowTopRight } from 'react-icons/cg'
import { addStyleIfTrue, getURL } from 'shared/lib'
import { Items } from './Items'
import { useAppSelector } from 'shared/model'
import { selectIsPopup } from 'entities/settings'

export const Row = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RowTop open={open} setOpen={setOpen} />
      <RowBottom open={open} setOpen={setOpen} />
    </>
  )
}

type Props = { open: boolean; setOpen: (open: boolean) => void }

const RowTop = ({ open, setOpen }: Props) => {
  const isPopup = useAppSelector(selectIsPopup)

  const tableCellProps: TableCellProps = {
    sx: { ...addStyleIfTrue(isPopup, { fontSize: 12, paddingTop: '13px', paddingBottom: '13px' }) },
  }

  return (
    <TableRow>
      <TableCell {...tableCellProps}>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          sx={{ ...addStyleIfTrue(isPopup, { flexDirection: 'column', alignItems: 'flex-start' }) }}
        >
          <Box
            width={54}
            height={54}
            borderRadius={1}
            p={1}
            bgcolor={'#fff'}
            flexShrink={0}
            overflow={'hidden'}
            sx={{ ...addStyleIfTrue(isPopup, { width: 32, height: 32 }) }}
          >
            <Box component={'img'} sx={{ maxWidth: '100%' }} src={getURL(ProcuctImage)} alt='' />
          </Box>
          <Box sx={{ ...addStyleIfTrue(isPopup, { margin: '10px 0 0!important' }) }}>
            <Box
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              width={190}
              sx={{ ...addStyleIfTrue(isPopup, { width: 120, fontSize: 12 }) }}
            >
              WEEM Biotin Gummies for Hair, Skin and Nails - Vegan Vitamins for Men & Women, Supports Faster Hair Growth
              and Stronger Nails - Extra Strength 10,000mcg
            </Box>
            <Stack direction={'row'} alignItems={'center'} alignContent={'flex-start'} spacing={1}>
              <Box lineHeight={'0'}>
                <img src={getURL(FlagsUSA)} alt='' />
              </Box>
              <Stack direction={'row'} alignItems={'center'} spacing={2} sx={{ cursor: 'pointer' }}>
                <Box fontSize={12} fontWeight={700} lineHeight={1}>
                  B08FGZSW8L
                </Box>
                <Box component={PiCopySimple}></Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Box fontFamily={'Plain'} fontWeight={300}>
          WEEM
        </Box>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Box fontWeight={700} position={'relative'} top={2}>
          $29.78
        </Box>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Box fontFamily={'Plain'}>$5,000</Box>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Box fontFamily={'Plain'}>888</Box>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <IoMdStar color='yellow' fontSize={18} style={{ marginTop: -3 }} />
          <Box fontWeight={700} fontSize={14}>
            4.3
          </Box>
        </Stack>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Stack direction={'row'} spacing={1} color={'#8AFF6C'}>
          <Box fontWeight={700} sx={{ textDecoration: 'underline' }} fontSize={14}>
            $483.19
          </Box>
          <Box
            component={CgArrowTopRight}
            fontSize={20}
            sx={{ ...addStyleIfTrue(isPopup, { position: 'relative', top: -2 }) }}
          />
        </Stack>
      </TableCell>
      <TableCell {...tableCellProps}>
        <Box fontSize={12} fontFamily={'Plain'}>
          $357.19
        </Box>
      </TableCell>
      <TableCell {...tableCellProps}>
        <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

const RowBottom = ({ open }: Props) => {
  const isPopup = useAppSelector(selectIsPopup)

  const cardContentProps: CardContentProps = {
    sx: { minHeight: '100%', ...addStyleIfTrue(isPopup, { py: 3 }) },
  }

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Stack py={6} spacing={4}>
            <Stack direction={'row'} spacing={2.5}>
              <Box
                width={140}
                height={140}
                lineHeight={'140px'}
                textAlign={'center'}
                borderRadius={6}
                bgcolor={'#fff'}
                flexShrink={0}
                overflow={'hidden'}
                p={2}
                sx={{ ...addStyleIfTrue(isPopup, { width: 80, height: 80, borderRadius: 4, p: 0.5 }) }}
              >
                <Box component={'img'} sx={{ maxWidth: '100%' }} src={getURL(ProcuctImage)} alt='' />
              </Box>
              <Typography
                variant='body1'
                fontSize={20}
                letterSpacing={'-.5px'}
                lineHeight={1.3}
                fontFamily={'Plain'}
                sx={{ ...addStyleIfTrue(isPopup, { fontSize: 16 }) }}
              >
                WEEM Biotin Gummies for Hair, Skin and Nails - Vegan Vitamins for Men & Women, Supports Faster Hair
                Growth and Stronger Nails - Extra Strength 10,000mcg
              </Typography>
            </Stack>
            <Box>
              <Grid container spacing={4}>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined' sx={{ height: '100%' }}>
                    <CardContent {...cardContentProps}>
                      <PieChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined' sx={{ height: '100%' }}>
                    <CardContent {...cardContentProps}>
                      <Items />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined' sx={{ height: '100%' }}>
                    <CardContent {...cardContentProps}>
                      <RadarChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Collapse>
      </TableCell>
    </TableRow>
  )
}
