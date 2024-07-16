import React from 'react'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Header from '@/components/Header'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import {store} from '@/store/store'
import { Provider } from 'react-redux'
import DetailPage from '@/pages/DetailPage'

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
    },
    {
      path:'/DetailPage',
      element:<DetailPage/>
    }]
   }])


  return (
    <>
    <Provider store={store}>
    <RouterProvider router={Routes}>
    </RouterProvider>
    </Provider>
    </>
  )
}

export default App
