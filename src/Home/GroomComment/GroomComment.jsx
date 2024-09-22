import { useContext } from "react";
import { serviceContext } from "../../Providers/ServiceProvider";

const GroomComment = () => {
  const { themeColor,setThemeColor} = useContext(serviceContext);

  return (
    <div className="pt-10 mx-5 rounded-xl ">
      <div className={`carousel bg-red-50 w-full rounded-xl ${(themeColor=="dark")?"border-slate-700 bg-red-800 bg-opacity-5":" border-slate-200 bg-red-50"} border`}>
        <div data-aos='fade-up' id="item1" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/K5gZ1B2/1.jpg" alt="" />
         <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
         <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item2" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/mR48FSM/2.jpg" alt="" />
         <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
         <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item3" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/pf9F8XS/3.jpg" alt="" />
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
          <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item4" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/prgkSP0/4.jpg" alt="" />
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
          <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}><i>"We couldn't be happier with the service provided by 2Ring. The user-friendly interface made planning our wedding a breeze."</i></p>
          
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className={`btn  btn-xs ${(themeColor=="dark")?"text-slate-900 hover:text-gray-300 hover:bg-slate-900 bg-slate-300":"text-gray-300 hover:bg-slate-300 hover:text-gray-900"}`}>
          1
        </a>
        <a href="#item2" className={`btn btn-xs ${(themeColor=="dark")?"text-slate-900 bg-slate-300 hover:text-gray-300":"text-gray-300 bg-slate-900 hover:bg-slate-300 hover:text-gray-900"}`}>
          2
        </a>
        <a href="#item3" className={`btn btn-xs ${(themeColor=="dark")?"text-slate-900 bg-slate-300 hover:text-gray-300":"text-gray-300 bg-slate-900 hover:bg-slate-300 hover:text-gray-900"}`}>
          3
        </a>
        <a href="#item4" className={`btn btn-xs ${(themeColor=="dark")?"text-slate-900 bg-slate-300 hover:text-gray-300":"text-gray-300 bg-slate-900 hover:bg-slate-300 hover:text-gray-900"}`}>
          4
        </a>
      </div>
    </div>
  );
};

export default GroomComment;
