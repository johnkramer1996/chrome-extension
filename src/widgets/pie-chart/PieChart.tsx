import { Box, Stack } from '@mui/material'
import { Pie, PieChart, Cell } from 'recharts'
import { Parameters } from 'shared/ui'

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
