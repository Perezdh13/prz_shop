import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePageView from '../app/view/home/HomePageView'

function Router() {
  const router = createBrowserRouter([
    {
    path: "/",
    element:<HomePageView />
  }
])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Router