import { Box } from '@mui/material'
import { Radar, RadarChart, PolarGrid, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'
import { Parameters } from 'shared/ui'

const data = [
  {
    subject: 'Math',
    A: 50,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

export const CustomedRadarChart = () => {
  return (
    <Box height={255} position={'relative'}>
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
            <Radar name='$350,39' dataKey='A' stroke='#8AFF6C' strokeWidth={3} fillOpacity={0} />
            <Radar name='$1.350,39' dataKey='B' stroke='#FE5858' strokeWidth={3} fillOpacity={0} />
          </RadarChart>
        </ResponsiveContainer>
      </Box>
      <Parameters />
    </Box>
  )
}

export const CustomedPieChart = () => {
  return (
    <Box height={255} position={'relative'} pt={2}>
      <PieChart width={280} height={140} style={{ margin: '0 auto' }}>
        <Pie
          data={[
            { name: 'Group A', value: 200 },
            { name: 'Group B', value: 400 },
          ]}
          cx={135}
          cy={135}
          startAngle={180}
          endAngle={0}
          innerRadius={118}
          outerRadius={135}
          paddingAngle={5}
          dataKey='value'
        >
          <Cell fill={'#FE5858'} stroke='none' stroke-linecap='round' />
          <Cell fill={'#8AFF6C'} stroke='none' />
        </Pie>
      </PieChart>
      <Box position={'absolute'} top={'85px'} left={0} right={0} zIndex={3} textAlign={'center'}>
        <Box fontSize={16}>Summary</Box>
        <Box fontSize={34} lineHeight={1.3} fontWeight={700}>
          $22.870
        </Box>
      </Box>
      <Parameters />
    </Box>
  )
}
