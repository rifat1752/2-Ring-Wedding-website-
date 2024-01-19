import React, { useContext } from 'react';
import { serviceContext } from '../../Providers/ServiceProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(serviceContext);
    const location =useLocation();

 
    //wait
    if(loading)return <h1 className="text-7xl text-center text-cyan-500"></h1>



   if(user){
    return children;
   }
   return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;