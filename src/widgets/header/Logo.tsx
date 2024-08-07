import { Link as LinkMui } from '@mui/material'
import { selectIsFull } from 'entities/settings'
import { Link } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'
import { useAppSelector } from 'shared/model'

export const Logo = () => {
  const isFull = useAppSelector(selectIsFull)

  return (
    <LinkMui
      component={Link}
      to={PATH_PAGE.root}
      sx={{
        transition: 'filter .3s',
        path: {
          transition: 'fill .3s',
        },
        '&:hover': {
          path: {
            fill: '#7C7C78',
          },
        },
        '&:active': {
          filter: 'drop-shadow(0px 0px 20px rgba(92, 92, 90, 0.37))',
        },
        lineHeight: 0,
      }}
    >
      <svg width='71' height='32' viewBox='0 0 71 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.90827 25.2632H0C0 25.2632 0 17.2632 0 14.9895C0 12.7158 2.23495 6.23158 10.4871 6.23158C18.7392 6.23158 21.0601 12.4632 21.0601 15.4105C21.0601 18.3579 21.0601 25.1789 21.0601 25.1789H13.2378C13.2378 25.1789 13.2378 17.1789 13.2378 15.9158C13.2378 14.6526 12.1203 13.6421 10.4871 13.6421C8.85383 13.6421 7.82231 15.0737 7.82231 15.9158C7.82231 16.7579 7.90827 25.2632 7.90827 25.2632Z'
          fill='white'
        />
        <path
          d='M42.7219 6.65263L31.719 32H23.8967L27.1632 24.4211L19.4268 6.65263H27.2492L31.0314 15.2421L34.8136 6.65263H42.7219Z'
          fill='white'
        />
        <path d='M37.4758 25.2632H45.2981L56.3009 0H48.3927L37.4758 25.2632Z' fill='white' />
        <path
          d='M64.3811 17.6C64.3811 17.6 63.6075 18.8632 62.49 19.0316C60.9427 19.3684 59.9112 18.7789 59.9112 18.7789L70.914 13.0526C69.6246 9.09474 65.9284 6.31579 61.4585 6.31579C56.043 6.31579 51.6591 10.6105 51.6591 16C51.6591 21.3895 56.043 25.6842 61.5445 25.6842C66.0144 25.6842 69.7966 22.7368 71 18.6947L64.3811 17.6ZM59.9112 13.2211C61.7164 12.2947 63.1777 13.2211 63.1777 13.2211L58.364 15.7474C58.278 15.6632 58.278 13.9789 59.9112 13.2211Z'
          fill='white'
        />
      </svg>
    </LinkMui>
  )
}
