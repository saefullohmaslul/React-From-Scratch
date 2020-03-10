import React from 'react'
import { RootState } from '@/store/reducer'
import { login, logout } from '@/store/modules/user'
import { connect } from 'react-redux'

const mapStateToProps = (state: RootState) => ({
  username: state.user.username
})

const mapDispatchToProps = { login, logout }

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const UnconnectedAuth: React.FC<Props> = props => {
  return (
    <>
      {props.username}
    </>
  )
}

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedAuth)