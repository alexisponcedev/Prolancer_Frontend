import Index from '@/pages/index'
import Cusomters from '@/pages/customers'
import New from '@/pages/customers/new'
import UserIndexPage from '@/pages/users'
import NewTaskPage from '@/pages/tasks/new'

export interface RouteConfig {
  path: string
  element: JSX.Element
  auth?: boolean
  label?: string
}

const customerRoutes: RouteConfig[] = [
  {
    path: '/customers/new',
    element: <New />,
    label: 'New Customer',
  },
]

const taskRoutes: RouteConfig[] = [
  {
    path: '/tasks/new',
    element: <NewTaskPage />,
    label: 'New Task',
  },
]

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    element: <Index />,
  },
  ...customerRoutes,
  ...taskRoutes,
  {
    path: '/customers',
    element: <Cusomters />,
  },
  {
    path: '/admin/users',
    element: <UserIndexPage />,
  },
  {
    path: '*',
    element: <h1>Page not found.</h1>,
  },
]

export default routesConfig
