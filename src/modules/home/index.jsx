import React from 'react'
import { connect } from 'react-redux'

import MenuList from '@/modules/home/components/menu-list'

import { mapDispatchToProps, mapStateToPtops } from './function'

const Home = ({ menus, addMenu }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is Home</h1>
      {process.env.APP}

      <br />

      <MenuList menus={menus.data} />

      <br />

      <button onClick={() => {
        const payload = {
          name: 'Bubur Kacang',
          price: 10000
        }
        addMenu(payload)
      }}>ADD</button>
    </div>
  )
}

export default connect(
  mapStateToPtops,
  mapDispatchToProps
)(Home)