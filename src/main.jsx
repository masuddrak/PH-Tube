import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import All from './Pages/All';
import Conedy from './Pages/Conedy';
import Music from './Pages/Music';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<All></All>,
        loader:()=>fetch("https://openapi.programming-hero.com/api/videos/category/1000")
      },
      {
        path:'/comedy',
        element:<Conedy></Conedy>,
        loader:()=>fetch("https://openapi.programming-hero.com/api/videos/category/1003")
      },
      {
        path:'/music',
        element:<Music></Music>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
