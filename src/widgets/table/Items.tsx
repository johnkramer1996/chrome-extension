import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { CSSProperties, RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { TransitionMapResult, TransitionState, useTransitionMap } from 'react-transition-state'
import { AiOutlineInfo } from 'react-icons/ai'
import { IoArrowUp } from 'react-icons/io5'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { addStyleIfTrue } from 'shared/lib'
import { useAppSelector } from 'shared/model'
import { selectIsPopup } from 'entities/settings'
import { motion } from 'framer-motion'

const items = [
  'Formula changes',
  'Taste complaints',
  'Decreased satisfaction',
  'Consistency issues',
  'Disappointing smell',
]

export const Items = () => {
  const transitionMap = useTransitionMap<HTMLDivElement>({
    timeout: 1000,
    enter: true,
    exit: true,
    preEnter: true,
    preExit: true,
  })
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Stack position={'relative'} ref={ref} minHeight={250}>
        {items.map((el, i) => {
          return <Item key={i} index={i} label={el} parentRef={ref} transitionMap={transitionMap} />
        })}
      </Stack>
    </>
  )
}

const Item = ({
  transitionMap,
  index,
  label,
  parentRef,
}: {
  transitionMap: TransitionMapResult<HTMLDivElement>
  index: number
  label: string
  parentRef: RefObject<HTMLDivElement>
}) => {
  const isPopup = useAppSelector(selectIsPopup)
  // TODO: simplify
  const { itemRef, state, toggle } = useItemEffect(transitionMap)
  const [transitionStyle, panelRef] = useHeightTransition(state)
  const { status, isMounted, isEnter } = state
  const [y, setY] = useState(0)

  useEffect(() => {
    if (isEnter) {
      const top = itemRef.current?.getBoundingClientRect().top ?? 0
      const topParent = parentRef.current?.getBoundingClientRect().top ?? 0
      setY(topParent - top)
      return
    }
    setY(0)
  }, [parentRef, itemRef, isEnter])

  return (
    <Stack
      ref={itemRef}
      // TODO: position relative
      position={'absolute'}
      top={index * 51}
      left={0}
      right={0}
      zIndex={isEnter ? 3 : 2}
      component={motion.div}
      animate={{ y }}
      transition={{ type: 'spring' }}
      border={'1px solid'}
      borderColor={'#2E2E2E'}
      bgcolor={'#121212'}
      py={1.5}
      px={2}
      borderRadius={2}
    >
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} height={29}>
        <Box
          fontSize={16}
          letterSpacing={'-.5px'}
          fontFamily={'Plain'}
          sx={{ ...addStyleIfTrue(isPopup, { fontSize: 14 }) }}
        >
          {label}
        </Box>
        <IconButton size='small' onClick={toggle}>
          <OpenInFullIcon fontSize='small' sx={{ ...addStyleIfTrue(isPopup, { fontSize: 18 }) }} />
        </IconButton>
      </Stack>
      {isMounted && (
        <Stack
          spacing={4}
          style={{
            display: status === 'exited' ? 'none' : undefined,
            transition: 'height .25s cubic-bezier(0,0,0,1)',
            ...transitionStyle,
          }}
        >
          <div ref={panelRef}>
            <Stack spacing={2}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Box fontFamily={'Plain'}>Oportunuties</Box>
                <Tooltip
                  title={
                    <>
                      A fish (pl.: fish or fishes) is an aquatic, anamniotic, gill-bearing vertebrate animal with
                      swimming fins and a hard skull, but lacking limbs with digits. Fish can be grouped into the more
                      basal jawless fish and the more common jawed fish, the latter including all living cartilaginous
                      and bony fish
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
              <Box fontWeight={300} sx={{ ...addStyleIfTrue(isPopup, { fontSize: 12 }) }}>
                Many reviewers have noticed a change in the formula of the vitamins, which has affected their taste,
                smell, and quality. Some people have reported receiving bottles with different colors or consistencies
                than
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
          </div>
        </Stack>
      )}
    </Stack>
  )
}

const useItemEffect = (transitionMap: TransitionMapResult<HTMLDivElement>) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const key = itemRef.current!
  const state = transitionMap.stateMap.get(key) ?? {
    status: 'exited',
    isMounted: false,
    isEnter: false,
    isResolved: true,
  }
  const { setItem, deleteItem, toggle } = transitionMap

  useEffect(() => {
    const key = itemRef.current!
    setItem(key)
    return () => void deleteItem(key)
  }, [setItem, deleteItem, key])

  return {
    itemRef,
    state,
    toggle: useCallback(() => toggle(key), [toggle, key]),
  }
}

const useHeightTransition = ({ status, isResolved }: TransitionState) => {
  const [height, setHeight] = useState<number>()
  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    console.log(status)
    if (status === 'preEnter' || status === 'preExit') {
      setHeight(elementRef.current?.getBoundingClientRect().height)
    }
  }, [status])

  const style: CSSProperties = {
    height:
      status === 'preEnter' || status === 'exiting'
        ? 0
        : status === 'entering' || status === 'preExit'
        ? height
        : undefined,
    overflow: isResolved ? undefined : 'hidden',
  }

  return [style, elementRef] as const
}
