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

import HomeLayout from './Layout/HomeLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Drawing from './Pages/Drawing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            index: true,
            element: <All></All>,
            loader: () => fetch("https://openapi.programming-hero.com/api/videos/category/1000")

          },
          {
            path: 'music',
            element: <Music></Music>,
            loader: () => fetch("https://openapi.programming-hero.com/api/videos/category/1001")

          },
          {
            path: 'comedy',
            element: <Conedy></Conedy>,
            loader: () => fetch("https://openapi.programming-hero.com/api/videos/category/1003")
          },
          {
            path: 'drawing',
           element:<Drawing></Drawing>
          }
        ]
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
