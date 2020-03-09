import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import './styles/index.scss'
import App from './app'
import store from './redux/store'

const history = createBrowserHistory()

const Index = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))