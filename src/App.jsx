import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/shared/Header/Header'
import './utils/i18Next'

export default function App() {
  return (
    <div>
      <Header/>
      <div className='m-5'>
      <Outlet/>
      </div>
    </div>
  )
}
