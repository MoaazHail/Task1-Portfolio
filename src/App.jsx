import React from 'react'
import Portfolio from './Components/Portfolio/Portfolio'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import ContactUs from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';



export default function App() {


    let router = createBrowserRouter([        // To Make Routing , We Should Download react-router-dom Library In npm  
      {path:"",element:<Layout/>, children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"contact",element:<ContactUs/>},
        {path:"*",element:<NotFound/>}
      ]}
      
    ]); 
    
    return (
        <>
        <RouterProvider router={router}/>
        </>
  )
}
