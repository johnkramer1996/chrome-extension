import {
  Box,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Popover,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import FlagsUSA from 'assets/icons/flags-USA.svg'
import Copy from 'assets/icons/copy.svg'
import StarMini from 'assets/icons/star-mini.svg'
import ArrowTopRight from 'assets/icons/arrow-top-right.svg'
import ProcuctImage from 'assets/products/product-1.jpg'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { AiOutlineInfo } from 'react-icons/ai'
import { RadarChart, PieChart } from 'widgets'

export const Row = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow>
        <TableCell>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Box width={54} height={54} borderRadius={1} bgcolor={'#fff'} flexShrink={0} overflow={'hidden'}>
              <img src={ProcuctImage} alt='' />
            </Box>
            <Box>
              <Box whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} width={190} fontSize={14}>
                WEEM Biotin Gummies for Hair, Skin and Nails - Vegan Vitamins for Men & Women, Supports Faster Hair
                Growth and Stronger Nails - Extra Strength 10,000mcg
              </Box>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box>
                  <img src={FlagsUSA} alt='' />
                </Box>
                <Stack direction={'row'} alignItems={'center'} spacing={2} sx={{ cursor: 'pointer' }}>
                  <Box fontSize={12} fontWeight={700} position={'relative'} top={-2}>
                    B08FGZSW8L
                  </Box>
                  <Box>
                    <img src={Copy} alt='' />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </TableCell>
        <TableCell>
          <Box>WEEM</Box>
        </TableCell>
        <TableCell>
          <Box fontWeight={700} fontSize={14}>
            $29.78
          </Box>
        </TableCell>
        <TableCell>
          <Box>$5,000</Box>
        </TableCell>
        <TableCell>
          <Box>888</Box>
        </TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Box>
              <img src={StarMini} alt='' />
            </Box>
            <Box fontWeight={700} fontSize={14}>
              4.3
            </Box>
          </Stack>
        </TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1}>
            <Box fontWeight={700} fontSize={14} color={'#8AFF6C'} sx={{ textDecoration: 'underline' }}>
              $483.19
            </Box>
            <Box>
              <img src={ArrowTopRight} alt='' />
            </Box>
          </Stack>
        </TableCell>
        <TableCell>
          <Box fontSize={12}>$357.19</Box>
        </TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
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
                >
                  <Box component={'img'} sx={{ verticalAlign: 'middle' }} src={ProcuctImage} alt='' />
                </Box>
                <Typography variant='body1' component={'p'}>
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
    </>
  )
}

const Item = ({ label }: { label: string }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Stack border={'1px solid'} borderColor={'#2E2E2E'} py={1.5} px={2} borderRadius={2} fontSize={14}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box fontSize={16} letterSpacing={'-.1px'}>
          {label}
        </Box>
        <IconButton size='small'>
          <OpenInFullIcon fontSize='small' />
        </IconButton>
      </Stack>
      <Stack spacing={3} display='none'>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Box>Oportunuties</Box>
          <Box
            component={'div'}
            width={14}
            height={14}
            lineHeight={'14px'}
            bgcolor={'#2E2E2E'}
            textAlign={'center'}
            borderRadius={'50%'}
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
          >
            <Box component={AiOutlineInfo} width={12} height={12} />
          </Box>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            A fish (pl.: fish or fishes) is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins
            and a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and
            the more common jawed fish, the latter including all living cartilaginous and bony fish
          </Popover>
        </Stack>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Box color={'#D9D9D9'}>Opportunity Score</Box>
          <Box color={'#80C67A'}>2</Box>
          <Box color={'#A6A7A8'} fontSize={12}>
            (Medium demand)
          </Box>
        </Stack>
        <Box fontSize={14} fontWeight={300}>
          Many reviewers have noticed a change in the formula of the vitamins, which has affected their taste, smell,
          and quality. Some people have reported receiving bottles with different colors or consistencies than
        </Box>
      </Stack>
    </Stack>
  )
}
