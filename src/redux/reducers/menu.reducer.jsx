const initialState = {
  data: [
    {
      name: 'Kolak',
      price: 5000
    }
  ]
}

const menus = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_MENU_DATA':
      return {
        ...state,
        data: [
          ...state.data,
          actions.payload
        ]
      }
    default:
      return state
  }
}

export default menus