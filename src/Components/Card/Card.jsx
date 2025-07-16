import React, { useState } from 'react'
import img from '../../assets/react.svg'


export default function Card({image}) {
    const [isPopUp,setIsPopUp] = useState(false);


    function PopUp(){
        setIsPopUp(!isPopUp);
        console.log(isPopUp)
    };


    return (
        <>
            <div className='p-5 hover:bg-teal-500 cursor-pointer bg-slate-500 w-[350px] h-[350px] flex justify-center items-center' onClick={PopUp}>
                <div className='relative w-[250px] h-[250px]' >
                    <img src={image} className=' absolute object-cover'/>
                </div>
            </div>
            {
                isPopUp && (
                    <div className='fixed top-20 bg-opacity-50 bg-gray-900 z-10 p-10 w-full h-screen flex items-center justify-center'>
                        <button onClick={PopUp}><i className="absolute fa-solid fa-xmark text-red-600 text-2xl top-4 right-2"></i></button> 
                        <div className=' relative w-[400px] h-[400px]'>
                            <img src={image} className=' absolute object-cover'/>
                        </div>
                    </div>
                )
            }

        </>
    )
}





