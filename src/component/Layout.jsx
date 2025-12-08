"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/ContextMenu'
import Navbar from './Navbar'
import Slider from './Sidbar'
import { usePathname, useRouter } from 'next/navigation'

function Layout({ children }) {
  const { isLogin } = useContext(AppContext)
  const router = useRouter()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false) 

  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogin") === "true"
    if (!loggedIn && pathname !== '/login') {
      router.push('/login')
    }
    setChecked(true)  
  }, [pathname, router])

  if (!checked) return null
  if (!isLogin && pathname !== '/login') return null

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Slider />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
