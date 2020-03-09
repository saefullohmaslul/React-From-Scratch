import { addMenuData } from '@/redux/actions/menu.action'

export const mapStateToPtops = state => {
  return {
    menus: state.menus
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addMenu: (payload) => dispatch(addMenuData(payload))
  }
}