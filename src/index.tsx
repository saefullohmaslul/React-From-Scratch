import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './styles/index.scss'
import App from './app'

const history = createBrowserHistory()

const Index = () => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))