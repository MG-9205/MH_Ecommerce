import React from 'react'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Header from '@/components/Header'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'

const Main:React.FC=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
 }

function App() {


   const Routes=createBrowserRouter([{
    path:'/',
    element:<Main/>,
    children:[{
      path:'/',
      element:<Home/>
    }]
   }])


  return (
    <>
    <RouterProvider router={Routes}>
    </RouterProvider> 
    </>
  )
}

export default App
