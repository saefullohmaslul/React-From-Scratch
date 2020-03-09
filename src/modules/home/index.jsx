import React from 'react'
import { connect } from 'react-redux'

import { addMenuData } from '../../redux/actions/menu.action'

const Home = ({ menus, addMenu }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is Home</h1>
      {process.env.APP}
      <br />
      {
        menus ? menus.data.map((menu, index) => {
          return (
            <ul key={index}>
              <li>
                <p>{menu.name}</p>
                <p>{menu.prive}</p>
              </li>
            </ul>
          )
        }) : null
      }
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

const mapStateToPtops = state => {
  return {
    menus: state.menus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMenu: (payload) => dispatch(addMenuData(payload))
  }
}

export default connect(
  mapStateToPtops,
  mapDispatchToProps
)(Home)