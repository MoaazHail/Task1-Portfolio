import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../MyFooter/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Navbar/>
        <div className=''>
          <Outlet/>
        </div>
        <Footer/>
    </>


  )
}
