import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='flex items-center justify-around p-24  bg-gray-800 text-white  w-full'>
            <div>
                <h1 className='font-bold text-4xl py-5'>Location</h1>
                <i className="fa-solid fa-location-dot text-2xl text-red-600 ml-10"></i>
                <p>Cairo/Egypt</p>
            </div>
            <div>
                <h1 className='font-bold text-4xl py-5'>Around The Web</h1>
                <div className='flex items-center justify-center gap-4 font-bold text-3xl'>
                    <a href="https://www.facebook.com/profile.php?id=100011408963894&mibextid=ZbWKwL"target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/moaaz__hail?igsh=MXB0eDU0YWxqZ2Fmaw=="target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="swswsw"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/moaaz-al-shahed"target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-4xl py-5'>About Me</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='text-center p-5 bg-slate-900 text-white'>
            <p>Copyright © Moaaz Website 2024</p>
        </div>
    </>
  )
}
