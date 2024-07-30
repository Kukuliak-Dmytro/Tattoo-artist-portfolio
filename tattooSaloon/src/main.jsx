import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index/Index.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Catalog from './Catalog/Catalog.jsx';
import './main.css'
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/catalog/:pageNo",
    element: <Catalog/>,
  },
  {
    path: "/catalog/view/:picNo",
    // A dynamic page is required here
    element: <Catalog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "*",
    element: <h1>notfound</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

           <RouterProvider router={router}/>
           
  </React.StrictMode>,
)
