import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Router.jsx'
import ServiceProvider from './Providers/ServiceProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServiceProvider>
    <RouterProvider router={Router}> </RouterProvider>
    </ServiceProvider>
  </React.StrictMode>,
)
