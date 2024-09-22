import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar"
import Swal from 'sweetalert2'
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";


const ServiceDetails = () => {
  const { themeColor} = useContext(serviceContext);
  const service = useLoaderData();
  const { id, image, price, description, serviceName } = service;
  return (
    <div>
        <div>
          <div className=" ">
          <Navbar></Navbar>
          </div>
         <div className={`${(themeColor=="dark")?"border-slate-700 bg-[#191e24] ":" border-slate-200  bg-slate-50"}  flex justify-center mb-10`}>
                   <div className={`card ${(themeColor=="dark")?"bg-slate-800 shadow-lg my-5  shadow-slate-600":"shadow-xl "}  lg:card-side w-3/4  h-auto mx-auto mt-20 `}>
                  <figure className=" p-2  lg:w-1/2">
                    <img  className="rounded-xl"
                      src={image}
                      alt="Album"
                    />
                  </figure>
                  <div className={`card-body  lg:w-1/2`}>
                    <h2 className="text-3xl font-bold text-[#FF007F]">{serviceName}</h2>
                    <p className={`text-base font-semibold courgette-regular ${(themeColor=="dark")?"text-slate-400":"text-gray-600"} text-justify`}><i>{description}</i></p>
                    <div className="card-actions justify-between mt-5">
                        <div className="w-20 h-10 font-semibold badge float-left  bg-yellow-300 hover:badge-outline text-white hover:text-white text-lg">{price}$</div>
                      <button onClick={()=>{Swal.fire({
  title: "Great!",
  text: "You have Buy This Service!",
  icon: "success"
});}} className=" w-20    text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 h-10 text-lg font-semibold rounded-full  ">Buy</button>
                    </div>
                  </div>
                </div>
         </div>
        </div>
      
     
    </div>
  );
};

export default ServiceDetails;
