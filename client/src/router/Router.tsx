import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePageView from '../app/view/home/HomePageView'
import LoginView from '../app/view/loginView/LoginView'

function Router() {
  const router = createBrowserRouter([
    {
    path: "/",
    element:<HomePageView />
  },
  {
    path: "/logged",
    element:<LoginView />
  }
])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Router