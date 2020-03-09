import HomeLayout from '@/layouts/home.layout'
import Home from '@/modules/home'

const routes = [
  {
    exact: true,
    component: Home,
    path: '/',
    layout: HomeLayout
  }
]

export default routes