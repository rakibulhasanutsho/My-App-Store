import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apps from './pages/apps/Apps.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import MainLayout from './mainlayout/MainLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Installation from './pages/installation/Installation.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    children: 
    [
      {
        index:true,
        element: <Homepage></Homepage>,
        loader: ()=>fetch("/data.json")
        
      },
      {
        path:"/apps",
        element:<Apps></Apps>
      },
      {
        path:"/installation",
        element:<Installation></Installation>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
