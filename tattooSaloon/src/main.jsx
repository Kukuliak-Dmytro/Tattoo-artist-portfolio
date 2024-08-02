import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index/Index.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Catalog from './Catalog/Catalog.jsx';
import App from './App.jsx';
import './main.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/Tattoo-artist-portfolio/",
    element: <App />,
    children: [
      {
        path: "/Tattoo-artist-portfolio/",
        element: <Index />,
      },
      {
        path: "/Tattoo-artist-portfolio/about",
        element: <About />,
      },
      {
        path: "/Tattoo-artist-portfolio/catalog/:pageNo",
        element: <Catalog />,
      },
      {
        path: "/Tattoo-artist-portfolio/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>notfound</h1>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
