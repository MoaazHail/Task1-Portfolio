import React from 'react'
import myImage from '../../assets/img1.png'
import style from './Style.module.css'


export default function Home() {
    return (
        
        <>
        <div className=' bg-teal-500 p-32'>
            <div className='container flex items-center justify-around'>
                <div>
                    <div className={style.cover}></div>
                    <img src={myImage} className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20" /> 
                </div>
            </div>
            <div>
                    <h1 className='text-center font-bold text-4xl text-white'>Moaaz Hail</h1>
                </div>
        </div>
        </>
    )
}
