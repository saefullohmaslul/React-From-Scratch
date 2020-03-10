import HomeLayout from '@/layouts/home.layout'
import Home from '@/modules/home'
import { Auth } from './modules/auth'
import { Products } from './modules/products'

export interface IRoute {
  exact: boolean,
  component: any,
  path: string,
  layout: (props: any) => JSX.Element
}

const routes: IRoute[] = [
  {
    exact: true,
    component: Home,
    path: '/',
    layout: HomeLayout
  },
  {
    exact: false,
    component: Auth,
    path: '/auth',
    layout: HomeLayout
  },
  {
    exact: false,
    component: Products,
    path: '/products',
    layout: HomeLayout
  }
]

export default routes