import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Career from './components/pages/Career.jsx'
import CaseStudy from './components/pages/CaseStudy.jsx'
import Blog from './components/pages/Blog.jsx'
import ContactUs from './components/pages/ContactUs.jsx'
import Service from './components/pages/Service.jsx'

const routes=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/casestudy",
        element: <CaseStudy />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    {/* <App /> */}
  </React.StrictMode>,
)
