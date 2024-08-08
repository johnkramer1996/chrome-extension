import { Box, IconButton, Tooltip } from '@mui/material'
import { Radar, RadarChart, PolarGrid, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'
import { Parameters } from 'widgets'

const data = [
  {
    subject: 'discount',
    A: 150,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'coupon',
    A: 50,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'subscribe and save',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Content score',
    A: 99,
    B: 50,
    fullMark: 150,
  },
  {
    subject: 'Aspect score',
    A: 85,
    B: 90,
    fullMark: 150,
  },
]

export const CustomedRadarChart = () => {
  return (
    <Box height={255} position={'relative'}>
      <Box>
        <Tooltip
          title={
            <Box
              sx={{
                '@container (max-width: 900px)': {
                  fontSize: 11,
                },
              }}
            >
              Summary metric describing optimal coverage Dynamic pricing discount, coupon, subscribe and save), Content
              score and Aspect score, and increased Contribution Profit
            </Box>
          }
          placement='top'
          arrow
        >
          <Box width={194} height={194} mx={'auto'}>
            <ResponsiveContainer width='100%' height='100%'>
              {/* outerRadius='100%' innerRadius={'40%'} */}
              <RadarChart cx='50%' cy='50%' outerRadius={96} innerRadius={37} data={data}>
                <PolarGrid
                  gridType='circle'
                  polarRadius={[37, 70, 96]}
                  polarAngles={[0, 45, 90, 135, 180, 225, 270, 315]}
                  stroke='#5C5C5A'
                  strokeWidth={2}
                />
                <Radar
                  name='$350,39'
                  dataKey='A'
                  stroke='#8AFF6C'
                  strokeWidth={3}
                  fillOpacity={0}
                  filter='drop-shadow(0px 0px 5px #8AFF6C)'
                />
                <Radar
                  name='$1.350,39'
                  dataKey='B'
                  stroke='#FE5858'
                  strokeWidth={3}
                  fillOpacity={0}
                  filter='drop-shadow(0px 0px 5px #FE5858)'
                />
              </RadarChart>
            </ResponsiveContainer>
          </Box>
        </Tooltip>
      </Box>
      <Parameters />
    </Box>
  )
}
