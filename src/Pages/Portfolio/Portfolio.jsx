import React from 'react'
import Card from '../../Components/Card/Card'

import img1 from '../../assets/project 1.svg'
import img2 from '../../assets/project 2.jpg'
import img3 from '../../assets/project 6.svg'
import img4 from '../../assets/project 1.svg'
import img5 from '../../assets/project 2.jpg'
import img6 from '../../assets/project 6.svg'


export default function Portfolio() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className='relative pb-20'>

      <h1 className=' text-gray-800 text-center py-10 text-4xl md:text-7xl font-bold'>Portfolio Component</h1>
      
      <div className=' flex items-center flex-wrap justify-center gap-10 '>
        {images.map((image, index)=>(
          <Card image={image} key={index}/>
        ))}
      </div>
      
    </section>
  )
}
