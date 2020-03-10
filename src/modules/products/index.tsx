import React from 'react'
import { RootState } from '@/store/reducer'
import { loadProducts } from '@/store/modules/products'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { History } from 'history'

const mapStateToProps = (state: RootState) => ({
  cart: state.products.cart
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loadProducts
    },
    dispatch
  )
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  history: History
}

const UnconnectedProducts: React.FC<Props> = props => {
  return (
    <>
      Your cart
      <button onClick={() => props.history.push('/home')}>Go</button>
    </>
  )
}

export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedProducts)