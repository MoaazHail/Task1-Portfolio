import React from 'react'
import myImage from '../../assets/home-Image.png'


export default function Home() {
    return (
        
        <>
        <div className=' bg-teal-500 flex-col justify-center items-center py-10'>

            <div className=' flex items-center justify-center'>
                <div className=' relative w-64 h-64 md:w-[350px] md:h-[350px] flex items-center'>
                    <img src={myImage} className=' absolute object-cover w-full h-full '/> 
                </div>

            </div>
            <div className=' flex justify-center items-center'>
                <h1 className='text-center font-bold text-xl md:text-4xl text-white mt-5'>Moaaz Hail</h1>

            </div>

        </div>
        </>
    )
}
