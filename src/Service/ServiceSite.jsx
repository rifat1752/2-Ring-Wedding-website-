import Navbar from "../Shared/Navbar";
import { useContext, useEffect } from "react";
import logo1 from "../assets/ring.png"
import { serviceContext } from "../Providers/ServiceProvider";
import { useLoaderData } from "react-router-dom";
import Service from "../Home/Service";
import Services from "../Home/Services";

const ServiceSite = () => {
    const {services} = useContext(serviceContext);

  return (
    <div>
      <div className="  ">
        <Navbar></Navbar>
      </div>
      <div className="mt-16 md:mt-0">
        <Services></Services>
      </div>
               
      
    </div>
  );
};

export default ServiceSite;
