import { Box } from '@mui/material'
import { selectIsPopup } from 'entities/settings'
import { Pie, PieChart, Cell } from 'recharts'
import { addStyleIfTrue } from 'shared/lib'
import { useAppSelector } from 'shared/model'
import { Parameters } from 'widgets'

export const CustomedPieChart = () => {
  const isPopup = useAppSelector(selectIsPopup)

  const div = isPopup ? 1.3 : 1

  return (
    <Box height={250} position={'relative'} pt={2} sx={{ ...addStyleIfTrue(isPopup, { pt: 7 }) }}>
      <PieChart width={280 / div} height={140 / div} style={{ margin: '0 auto' }}>
        <Pie
          data={[
            { name: 'Group A', value: 200 },
            { name: 'Group B', value: 400 },
          ]}
          cx={135 / div}
          cy={135 / div}
          startAngle={180}
          endAngle={0}
          innerRadius={118 / div}
          outerRadius={135 / div}
          paddingAngle={5}
          dataKey='value'
        >
          <Cell fill={'#FE5858'} stroke='none' />
          <Cell fill={'#8AFF6C'} stroke='none' />
        </Pie>
      </PieChart>
      <Box position={'absolute'} top={'85px'} left={0} right={0} zIndex={3} textAlign={'center'}>
        <Box fontSize={16} sx={{ ...addStyleIfTrue(isPopup, { fontSize: 13 }) }}>
          Summary
        </Box>
        <Box fontSize={34} lineHeight={1.3} fontWeight={700} sx={{ ...addStyleIfTrue(isPopup, { fontSize: 27 }) }}>
          $22.870
        </Box>
      </Box>
      <Parameters />
    </Box>
  )
}
