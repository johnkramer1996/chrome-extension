import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

type Props = {
  headerSlot?: ReactNode
}

export function Layout(props: Props) {
  return (
    <div>
      {props.headerSlot}
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}
