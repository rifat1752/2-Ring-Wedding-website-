import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const {id,serviceName,image,price,description} = service;
  return (
    <div className="flex items-center justify-center">
      <div className="card w-72 h-96  bg-base-200 shadow-2xl mb-10 ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body w-72 items-center text-center">
          <h2 className="card-title font-bold">{serviceName}</h2>
          <p className="font-semibold text-slate-600">{description.slice(0,50)} {description.length?"...":""}</p>
          <div className="card-actions"> 
          <Link to={`/service/${id}`}>
          <button className="btn  bg-gradient-to-r from-green-400 to-blue-500">Details</button>
         
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
