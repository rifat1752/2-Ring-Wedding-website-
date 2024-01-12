import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const serviceContext = createContext(null);

const ServiceProvider = ({children}) => {
    const [dataLength , setDataLength] = useState(3) 

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("https://api.npoint.io/8776086b5d73c4ccd7e4")
        .then(res => res.json())
        .then(data =>  setServices(data));
    },[])



    const serviceInfo ={services, dataLength,setDataLength}
    return (
        <serviceContext.Provider value={serviceInfo}>
            {children}
        </serviceContext.Provider>
    );
};

export default ServiceProvider;

ServiceProvider.propTypes ={
    children: PropTypes.node
}

