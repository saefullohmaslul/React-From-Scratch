import React from 'react'

const MenuList = ({ menus }) => {
  return (
    <>
      {
        menus ? menus.map((menu, index) => {
          return (
            <ul key={index}>
              <li>{menu.name} - {menu.price}</li>
            </ul>
          )
        }) : null
      }
    </>
  )
}

export default MenuList