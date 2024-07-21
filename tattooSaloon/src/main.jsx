import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index/Index.jsx';
import './main.css'
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/catalog",
    element: <h1>Catalog</h1>,
  },
  {
    path: "/contact",
    element: <h1>Book</h1>,
  },
  {
    path: "*",
    element: <h1>notfound</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           <RouterProvider router={router} />
  </React.StrictMode>,
)
