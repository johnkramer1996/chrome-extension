import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { AiOutlineInfo } from 'react-icons/ai'
import { IoArrowUp } from 'react-icons/io5'
import { useState } from 'react'

const items = [
  'Formula changes',
  'Taste complaints',
  'Decreased satisfaction',
  'Consistency issues',
  'Disappointing smell',
]

export const Items = () => {
  const [activeItem, setActiveItem] = useState<null | number>(null)

  const toggleActiveItme = (index: number) => {
    setActiveItem(activeItem === index ? null : index)
  }

  return (
    <Stack spacing={2} position={'relative'} minHeight={290}>
      {items.map((el, i) => {
        return <Item key={i} isActive={activeItem === i} onClick={toggleActiveItme} index={i} label={el} />
      })}
    </Stack>
  )
}

const Item = ({
  isActive,
  onClick,
  index,
  label,
}: {
  isActive: boolean
  onClick: (index: number) => void
  label: string
  index: number
}) => {
  return (
    <Stack
      position={'absolute'}
      top={isActive ? 0 : index * 50}
      mt={isActive ? '0!important' : 0}
      left={3}
      right={3}
      zIndex={isActive ? 3 : 2}
      border={'1px solid'}
      borderColor={'#2E2E2E'}
      bgcolor={'#121212'}
      py={1.5}
      px={2}
      borderRadius={2}
      sx={{
        '@container (max-width: 900px)': {},
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box fontSize={16} letterSpacing={'-.1px'} sx={{ '@container (max-width: 900px)': { fontSize: 14 } }}>
          {label}
        </Box>
        <IconButton size='small' onClick={() => onClick(index)}>
          <OpenInFullIcon fontSize='small' sx={{ '@container (max-width: 900px)': { fontSize: 18 } }} />
        </IconButton>
      </Stack>
      <Stack spacing={4} display={isActive ? 'block' : 'none'}>
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
