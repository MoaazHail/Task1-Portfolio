import React from 'react'

export default function Footer() {
  return (
    <footer className=' overflow-hidden '>
        
        <div className='grid  sm:grid-cols-1 md:grid-cols-3 gap-10 md:gap-5  p-16 bg-gray-800 text-white w-screen'>

            <div>
                <h1 className='font-bold text-3xl '>Location</h1>
                <i className="fa-solid fa-location-dot text-2xl text-red-600 ml-10"></i>
                <p>Cairo/Egypt</p>
            </div>

            <div>
                <h1 className='font-bold text-3xl '>Around The Web</h1>
                <div className='flex items-center justify-start md:justify-center gap-4 font-bold text-3xl'>
                    <a href="https://www.facebook.com/profile.php?id=100011408963894&mibextid=ZbWKwL"target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/moaaz__hail?igsh=MXB0eDU0YWxqZ2Fmaw=="target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="swswsw"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/moaaz-al-shahed"target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>About Me</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='text-center p-5 bg-slate-900 text-white'>
            <p>Copyright © Moaaz Website 2024</p>
        </div>
    </footer>
  )
}
