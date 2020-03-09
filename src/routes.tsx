import HomeLayout from '@/layouts/home.layout'
import Home from '@/modules/home'

export interface IRoute {
  exact: boolean,
  component: (props: any) => JSX.Element,
  path: string,
  layout: (props: any) => JSX.Element
}

const routes: IRoute[] = [
  {
    exact: true,
    component: Home,
    path: '/',
    layout: HomeLayout
  }
]

export default routes