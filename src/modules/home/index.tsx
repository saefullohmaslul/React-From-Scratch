import React from 'react'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is Home</h1>
      {process.env.APP}
    </div>
  )
}

export default Home