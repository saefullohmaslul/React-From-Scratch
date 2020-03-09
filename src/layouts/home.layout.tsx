import React from 'react'
import { IChildren } from '@/global/interface/base/children.interface'

const HomeLayout = ({ children }: IChildren) => {
  return (
    <div className="is-flex justify-content-center align-items-center height-100">
      {children}
    </div>
  )
}

export default HomeLayout