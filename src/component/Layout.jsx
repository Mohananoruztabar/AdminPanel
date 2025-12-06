import React from 'react'
import Navbar from './Navbar'
import Slider from './Sidbar'

function Layout({children}) {
  return (
    <div>
      <Navbar />
      <div>
        <Slider />
      </div>
      {children}
    </div>
  )
}

export default Layout