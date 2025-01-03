import { useFormik } from 'formik'
import React from 'react'

export default function ContactUs() {
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function Submit(values){
        console.log(values);
    }

    function Validation(values){
        const error = {};

        if(!values.name === ""){
            error.name = "The Name Is Required";
        }
        if(!values.email === ""){
            error.email = "The Email Is Required";
        }
        else if (!emailRegex.test(values.email)){
            error.email = "The Correct Email Formate Is example@example.com";
        }
        if(!values.password === ""){
            error.password = "The Password Is Required";
        }
        if(!values.description === ""){
            error.description = "The Description Is Required";
        }
    }
    let formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            description: ''
        },
        validate: Validation,
        onSubmit: Submit

    });
    
    return (
        <div className='container'>
            <h1 className='text-center text-gray-800 text-7xl font-bold p-10'>Contact Me</h1>
            
            <form className="max-w-md mx-auto m-10" onSubmit={formik.handleSubmit}>

            
            <div className="relative z-0 w-full mb-10 group">
                <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text" 
                name="name" 
                className="block py-2.5 px-0 w-full  text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                <label htmlFor="name" className="peer-focus:font-medium absolute  text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"> Name</label>
            </div>

            <div className="relative z-0 w-full mb-10 group">
                <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email" 
                name="email" 
                className="block py-2.5 px-0 w-full  text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
                <label htmlFor="email" className="peer-focus:font-medium absolute  text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email Address</label>
            </div>

            <div className="relative z-0 w-full mb-10 group">
                <textarea
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
                type="text" 
                name="description" 
                className="block py-2.5 px-0 w-full  text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                <label htmlFor="description" className="peer-focus:font-medium absolute  text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"> Description</label>
            </div>


            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  text-xl w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </div>
    )
}
