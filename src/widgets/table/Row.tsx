import {
  Box,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Stack,
  TableCell,
  TableCellProps,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import FlagsUSA from 'assets/icons/flags-USA.svg'
import ProcuctImage from 'assets/products/product-1.jpg'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { AiOutlineInfo } from 'react-icons/ai'
import { RadarChart, PieChart } from 'widgets'
import { IoMdStar } from 'react-icons/io'
import { PiCopySimple } from 'react-icons/pi'
import { IoArrowUp } from 'react-icons/io5'
import { CgArrowTopRight } from 'react-icons/cg'
import { getURL } from 'shared/lib'

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
  const tableCellProps: TableCellProps = {
    sx: {
      '@container (max-width: 900px)': {
        fontSize: 12,
        paddingTop: '13px',
        paddingBottom: '13px',
      },
    },
  }

  return (
    <TableRow>
      <TableCell {...tableCellProps}>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          sx={{
            '@container (max-width: 900px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          }}
        >
          <Box
            width={54}
            height={54}
            borderRadius={1}
            p={1}
            bgcolor={'#fff'}
            flexShrink={0}
            overflow={'hidden'}
            sx={{
              '@container (max-width: 900px)': {
                width: 32,
                height: 32,
              },
            }}
          >
            <Box component={'img'} sx={{ maxWidth: '100%' }} src={getURL(ProcuctImage)} alt='' />
          </Box>
          <Box
            sx={{
              '@container (max-width: 900px)': {
                margin: '10px 0 0!important',
              },
            }}
          >
            <Box
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              width={190}
              sx={{
                '@container (max-width: 900px)': {
                  width: 120,
                  fontSize: 12,
                },
              }}
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
            sx={{
              '@container (max-width: 900px)': {
                position: 'relative',
                top: -2,
              },
            }}
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
              >
                <Box component={'img'} sx={{ maxWidth: '100%' }} src={getURL(ProcuctImage)} alt='' />
              </Box>
              <Typography variant='body1' component={'p'} fontFamily={'Plain'}>
                WEEM Biotin Gummies for Hair, Skin and Nails - Vegan Vitamins for Men & Women, Supports Faster Hair
                Growth and Stronger Nails - Extra Strength 10,000mcg
              </Typography>
            </Stack>
            <Box>
              <Grid container spacing={4}>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined'>
                    <CardContent>
                      <PieChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Stack spacing={2}>
                        <Item label='Formula changes' />
                        <Item label='Taste complaints' />
                        <Item label='Decreased satisfaction' />
                        <Item label='Consistency issues' />
                        <Item label='Disappointing smell' />
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card variant='outlined'>
                    <CardContent>
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

const Item = ({ label }: { label: string }) => {
  return (
    <Stack border={'1px solid'} borderColor={'#2E2E2E'} py={1.5} px={2} borderRadius={2}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box fontSize={16} letterSpacing={'-.1px'}>
          {label}
        </Box>
        <IconButton size='small'>
          <OpenInFullIcon fontSize='small' />
        </IconButton>
      </Stack>
      <Stack spacing={4} display={'none'}>
        <Stack spacing={2}>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Box fontFamily={'Plain'}>Oportunuties</Box>
            <Tooltip
              title={
                <>
                  A fish (pl.: fish or fishes) is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming
                  fins and a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless
                  fish and the more common jawed fish, the latter including all living cartilaginous and bony fish
                </>
              }
              placement='top'
              arrow
            >
              <Box
                component={'div'}
                width={14}
                height={14}
                lineHeight={'14px'}
                bgcolor={'#2E2E2E'}
                textAlign={'center'}
                borderRadius={'50%'}
                sx={{ cursor: 'pointer' }}
              >
                <Box component={AiOutlineInfo} width={12} height={12} />
              </Box>
            </Tooltip>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Box color={'#D9D9D9'}>Opportunity Score</Box>
            <Box color={'#80C67A'}>2</Box>
            <Box color={'#A6A7A8'} fontSize={12}>
              (Medium demand)
            </Box>
          </Stack>
          <Box fontWeight={300}>
            Many reviewers have noticed a change in the formula of the vitamins, which has affected their taste, smell,
            and quality. Some people have reported receiving bottles with different colors or consistencies than
          </Box>
        </Stack>
        <Box>
          <Box fontFamily={'Plain'}>Expected Sales Growth</Box>
          <Stack direction={'row'} spacing={2} color={'#80C67A'}>
            <Box>$350,89</Box>
            <Box fontSize={12}>
              +15%
              <IoArrowUp size={14} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}
