import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import logo1 from "../assets/ring.png"
import { serviceContext } from "../Providers/ServiceProvider";
import EachService from "./EachService";
import { useLoaderData } from "react-router-dom";

const ServiceSite = () => {
    const {services} = useContext(serviceContext);
    const serv = useLoaderData();
    // console.log(serv);
  return (
    <div>
      <div className=" md:bg-slate-600 ">
        <Navbar></Navbar>
      </div>
      <div>
      <div>
                <div className="w-full  py-20  flex flex-col justify-center items-center">
                    <img className="w-24 h-24 my-5" src={logo1} alt="" />
                    <h1 className="text-5xl font-bold my-5">Our Services</h1>
                    <p className="text-lg text-center w-3/4 font-medium my-5 text-gray-600">With a commitment to excellent customer service, we strive to be your trusted partner in crafting the perfect wedding day. Our support team is knowledgeable, responsive, and always eager to help you navigate through any inquiries or concerns.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 mx-auto">
                {
                    services.slice(0,services.length).map(service=> <EachService key={service.id} service={service}></EachService>)
                }
            </div>
      </div>
    </div>
  );
};

export default ServiceSite;
