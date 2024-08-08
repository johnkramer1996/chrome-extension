import { selectIsAuth } from 'entities/session'
import { useCurrentUserQuery } from 'entities/user'
import { useAppSelector } from 'shared/model'
import { Layout } from 'shared/ui'
import { Header } from 'widgets'
import { DraggableLayout } from './draggable.layout'

export const BaseLayout = () => {
  const isAuth = useAppSelector(selectIsAuth)
  // const currentUserState = useCurrentUserQuery(undefined, { skip: !isAuth })

  // if (currentUserState.isLoading) return <div>Loading</div>

  return (
    <DraggableLayout>
      <Layout headerSlot={<Header />} />
    </DraggableLayout>
  )
}
