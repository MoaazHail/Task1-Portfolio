import React from 'react'
import Card from '../Card/Card'

export default function Portfolio() {
  return (
    <>
      <h1 className=' text-gray-800 text-center py-10 text-7xl font-bold'>Portfolio Component</h1>
      
      <div className='container flex justify-center items-center flex-wrap  p-10'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}
