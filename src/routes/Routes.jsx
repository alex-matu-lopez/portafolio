import React from 'react'
import {createBrowserRouter,
   RouterProvider} from 'react-router-dom'
import Home from '../pages/home'
import Proyects from '../pages/proyects'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <Home/>
    },
    {
      path:"/proyects",
      element: <Proyects/>
    }
  ]
)


const Routes = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default Routes

