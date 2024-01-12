import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../Home/Home";
import ServiceSite from "../Service/ServiceSite";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import AboutSite from "../AboutSite/AboutSite";
import Blogs from "../Blogs/Blogs";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          loader:() => fetch('https://api.npoint.io/8776086b5d73c4ccd7e4'),
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<AboutSite></AboutSite>
        },
        {
          path:"/services",
          loader:() => fetch('https://api.npoint.io/8776086b5d73c4ccd7e4'),
          element:<ServiceSite></ServiceSite>
        },
        {
          path:"/service/:id",
          loader: ({params})=> fetch(`https://api.npoint.io/8776086b5d73c4ccd7e4/${params.id-1}`),
          element: <ServiceDetails></ServiceDetails>,
        },
        {
          path:"/blog",
          loader: ()=> fetch("https://api.npoint.io/d1a6b8eb525f1a4df29a"),
          element:<Blogs></Blogs>
        }
      ]
    }
  ]);

export default Router;