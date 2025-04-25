'use client'
import React from 'react'
import Card from '@/app/components/card/Card'

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Products" description="Manage your products here." />
        <Card title="Orders" description="Track your orders here." />
        <Card title="Users" description="View your users list here." />
        <Card title="Revenue" description="See your earnings and revenue here." />
        <Card title="Reports" description="Generate various reports here." />
        <Card title="Settings" description="Manage your preferences here." />
      </div>
    </div>
  )
}

export default DashboardPage
