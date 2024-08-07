import { Navigate, createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'
import { BaseLayout } from './layouts/base.layout'
import { GuestGuard } from './guards/GuestGuard'
import { AuthGuard } from './guards/AuthGuard'
import { AuthLayout } from './layouts/auth.layout'
import { ErrorPage, LoginPage, MainPage, NotFoundPage, PasswordResetPage } from 'pages'

export const appRouter = () => {
  return createBrowserRouter([
    {
      element: (
        <GuestGuard>
          <BaseLayout />
        </GuestGuard>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: PATH_PAGE.root,
          element: <MainPage />,
        },
        { path: PATH_PAGE[404], element: <NotFoundPage /> },
        { path: PATH_PAGE.error, element: <ErrorPage /> },
        { path: 'index.html', element: <Navigate to={PATH_PAGE.root} replace /> },
        { path: '*', element: <Navigate to={PATH_PAGE[404]} replace /> },
      ],
    },
    {
      element: (
        <AuthGuard>
          <AuthLayout />
        </AuthGuard>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: PATH_PAGE.login,
          element: <LoginPage />,
        },
        {
          path: PATH_PAGE.passwordReset,
          element: <PasswordResetPage />,
        },
        { path: PATH_PAGE[404], element: <NotFoundPage /> },
        { path: PATH_PAGE.error, element: <ErrorPage /> },
        { path: '*', element: <Navigate to={PATH_PAGE[404]} replace /> },
      ],
    },
  ])
}
