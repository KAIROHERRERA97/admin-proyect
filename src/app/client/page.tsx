import Header from '@/components/ui/header'
import SideBar from '@/components/ui/sideBar'
import React from 'react'

export default function Client() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col bg-slate-50 mt-20">
      <SideBar></SideBar>
      </main>
    </>
  )
}
