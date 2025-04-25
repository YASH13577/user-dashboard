'use client'
import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 p-4 overflow-auto bg-gray-900 text-white">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
