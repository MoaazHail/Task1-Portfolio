import React, { useState } from 'react'
import img from '../../assets/react.svg'
import styles from './Style.module.css'

export default function Card() {
    const [isPopUp,setIsPopUp] = useState(false);

    function popUp(){
        setIsPopUp(!isPopUp);
        console.log(isPopUp)
    };


    return (
        <>
            {
                isPopUp && (
                    <div className='absolute bg-opacity-50 bg-gray-900 z-10 p-10 w-4/5 h-screen flex items-center justify-center'>
                        <button onClick={popUp}><i className="absolute fa-solid fa-xmark text-red-600 text-2xl top-0 right-2"></i></button> 
                        <img src={img} width={300} className='p-20 bg-green-500'/>
                    </div>
                )
            }
            <div className='p-5 hover:bg-blue-700 hover: cursor-pointer bg-slate-500 m-3  h-96 ' onClick={popUp}>
                <img src={img} width={300} className='p-10 bg-white'/>
            </div>
        </>
    )
}
