import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'

import useRouter from 'use-react-router'
import routes from '@/routes'
import LayoutRoute from '@/layouts/index.layout'

const App = () => {
  const {
    location: { pathname }
  } = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Switch>
      {
        routes.map((route, index) => {
          return (
            <LayoutRoute key={index} layout={route.layout} exact={route.exact} component={route.component} path={route.path} />
          )
        })
      }
    </Switch>
  )
}

export default App