import React from 'react'
import myImage from '../../assets/home-Image.png'
import style from './Style.module.css'


export default function Home() {
    return (
        
        <>
        <div className=' bg-teal-500 p-32'>
            <img src={myImage}/> 
            <h1 className='text-center font-bold text-4xl text-white mt-5'>Moaaz Hail</h1>
        </div>
        </>
    )
}
