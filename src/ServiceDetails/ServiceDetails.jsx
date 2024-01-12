import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar"
import Swal from 'sweetalert2'


const ServiceDetails = () => {
  const service = useLoaderData();
  const { id, image, price, description, serviceName } = service;
  return (
    <div>
        <div>
          <div className=" bg-slate-600">
          <Navbar></Navbar>
          </div>
         <div className="flex justify-center my-10">
                   <div className="card  lg:card-side w-3/4 h-auto mx-auto mt-20 bg-base-100 shadow-xl">
                  <figure className="lg:w-1/2">
                    <img 
                      src={image}
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body lg:w-1/2">
                    <h2 className="text-3xl font-bold">{serviceName}</h2>
                    <p className="text-base font-medium text-justify text-slate-500">{description}</p>
                    <div className="card-actions justify-between mt-5">
                        <div className="w-20 h-10 font-semibold badge float-left  badge-secondary hover:badge-outline text-lg">{price}$</div>
                      <button onClick={()=>{Swal.fire({
  title: "Great!",
  text: "You have Buy This Service!",
  icon: "success"
});}} className="btn btn-primary w-20 ">Buy</button>
                    </div>
                  </div>
                </div>
         </div>
        </div>
      
     
    </div>
  );
};

export default ServiceDetails;
