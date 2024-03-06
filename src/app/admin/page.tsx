import { Button } from '@/components/ui/button'
import Header from '@/components/ui/header'
import React from 'react'

export default function AdminPage (){
  return (
    <main className='flex flex-col bg-slate-100 '>
    <Header></Header>
    <div>
    <h1> Estamos en la page de Admin </h1>
    <Button> okis </Button>
    </div>
    </main>
  )
}

