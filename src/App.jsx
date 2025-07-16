import React from 'react'
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home/Home'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import ContactUs from './Pages/Contact/Contact';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';



export default function App() {


    let router = createHashRouter([        // To Make Routing , We Should Download react-router-dom Library In npm  
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
