import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import '@/styles/index.scss'
import App from '@/app'
import store from '@/store'

const history = createBrowserHistory()

const ReduxContainer = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

export default ReduxContainer