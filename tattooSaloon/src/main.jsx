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
    path: "/Tatto-artist-portfolio/",
    element: <App />,
    children: [
      {
        path: "/Tatto-artist-portfolio/",
        element: <Index />,
      },
      {
        path: "/Tatto-artist-portfolio/about",
        element: <About />,
      },
      {
        path: "/Tatto-artist-portfolio/catalog/:pageNo",
        element: <Catalog />,
      },
      {
        path: "/Tatto-artist-portfolio/catalog/view/:picNo",
        // A dynamic page is required here
        element: <Catalog />,
      },
      {
        path: "/Tatto-artist-portfolio/contact",
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
