'use client'
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold">Yash</h2>
      <nav className="space-y-2">
        <Link href="/" className="block hover:text-gray-400">Home</Link>
        <Link href="/dashboard" className="block hover:text-gray-400">Dashboard</Link>
        <Link href="/manage-users" className="block hover:text-gray-400">Manage Users</Link>
      </nav>
    </div>
  )
}

export default Sidebar
