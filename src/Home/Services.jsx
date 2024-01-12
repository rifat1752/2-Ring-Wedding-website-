import { useContext } from "react";

import Service from "./Service";
import { serviceContext } from "../Providers/ServiceProvider";
import { Link } from "react-router-dom";




const Services = () => {
    const {services, dataLength} = useContext(serviceContext);

    return (
        <div>
          
            <div>
                <div className="w-full  py-20  flex flex-col justify-center items-center">
                    <img className="w-24 h-24 my-5" src="https://i.ibb.co/GtG677B/logo.png" alt="" />
                    <h1 className="text-5xl font-bold my-5">Our Services</h1>
                    <p className="text-lg text-center w-3/4 font-medium my-5 text-gray-600">With a commitment to excellent customer service, we strive to be your trusted partner in crafting the perfect wedding day. Our support team is knowledgeable, responsive, and always eager to help you navigate through any inquiries or concerns.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 mx-auto">
                {
                    services.slice(0,dataLength).map(service=> <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div className="flex"><Link className="mx-auto" to='/services'><button className="btn btn-outline btn-success">See more</button></Link></div>
        </div>
    );
};

export default Services;