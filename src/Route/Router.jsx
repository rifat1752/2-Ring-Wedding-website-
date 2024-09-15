import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../Home/Home";
import ServiceSite from "../Service/ServiceSite";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import AboutSite from "../AboutSite/AboutSite";
import Blogs from "../Blogs/Blogs";
import Registration from "../Registration/Registration";
import LogIn from "../Login/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<AboutSite></AboutSite>
        },
        {
          path:"/services",
          element:<ServiceSite></ServiceSite>
        },
        {
          path:"/service/:id",
          loader: ({params})=> fetch(`https://api.npoint.io/8776086b5d73c4ccd7e4/${params.id-1}`),
          element:<PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path:"/blog",
          element:<Blogs></Blogs>
        },
        {
          path:"/register",
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        }
      ]
    }
  ]);

export default Router;