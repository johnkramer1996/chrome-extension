import { Layout } from 'shared/ui'
import { Header } from 'widgets'
import { DraggableLayout } from './draggable.layout'

export const AuthLayout = () => {
  return (
    <DraggableLayout>
      <Layout headerSlot={<Header />} />
    </DraggableLayout>
  )
}
