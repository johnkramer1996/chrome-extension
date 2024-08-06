import { selectIsAuth } from 'entities/session'
import { selectTheme } from 'entities/theme'
import { useCurrentUserQuery } from 'entities/user'
import { useAppSelector } from 'shared/model'
import { Layout } from 'shared/ui'
import { Header } from 'widgets'

export const BaseLayout = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const currentUserState = useCurrentUserQuery(undefined, { skip: !isAuth })
  const theme = useAppSelector(selectTheme)

  if (currentUserState.isLoading) return <div>Loading</div>

  return <Layout headerSlot={<Header />} />
}
