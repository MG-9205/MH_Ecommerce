import React from 'react'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Header from '@/components/Header'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import {store} from '@/store/store'
import { Provider } from 'react-redux'
import DetailPage from '@/pages/DetailPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import CatProductPage, { CategoryProvider } from './pages/CatProductPage'

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
    },
    {
      path:'/CatProductPage',
      element:<CatProductPage/>
    }]
   },
{
  path:'/SignUp',
  element:<SignUp/>
},
{
  path:'/Login',
  element:<Login/>
}])


  return (
    <>
    <CategoryProvider>
    <Provider store={store}>
    <RouterProvider router={Routes}>
    </RouterProvider>
    </Provider>
    </CategoryProvider>
    </>
  )
}

export default App
