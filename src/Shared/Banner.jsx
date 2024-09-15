import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Banner = () => {
    const banner = < >
    <div className=" mt-5 py-5 rounded-lg  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-5   text-center   text-[#FF007F] font-extrabold"><span className="text-slate-100">Wedding </span>Couple</h1>
        <p className="text-xs sm:text-sm lg:text-base xl:text-lg my-5 text-center text-white font-semibold ">A wedding is a beautiful celebration that marks the union of two individuals embarking on a journey of lifelong companionship. The couple, dressed in elegant attire, stands at the center of attention, surrounded by the warmth and joy of their loved ones. As they exchange vows and promises of love, the atmosphere is filled with anticipation, excitement, and the promise of a shared future.</p>
        <Link to='/register' className="flex my-5  text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-36 h-12 rounded-full  mx-auto"><button className="  text-lg font-bold  mx-auto pb-1"> Sign Up</button></Link>
    </div>
                   </>
    return (
        <div>
        <div className="carousel min-h-screen w-full">
            <div id="slide1" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/HFTk92b/groom-putting-ring-bride-s-finger.jpg')] backdrop-blur-md">
            <div className="w-full h-full relative  backdrop-blur-sm">
              <div className="w-full absolute z-10  "><Navbar home={true}></Navbar> </div>  
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❮</a> 
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a href="#slide2" className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❯</a>
              </div>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full  bg-cover bg-[url('https://i.ibb.co/kKGb07S/bride-groom-couple-wedding-photos.jpg')]">
         <div className="w-full h-full  backdrop-blur-sm">
           <div className="w-full"><Navbar home={true} ></Navbar> </div>  
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❮</a> 
            <div className="w-3/5 text-white ">{banner}</div>
            <a href="#slide3"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❯</a>
           </div>
         </div>
        </div> 
  
  <div id="slide3" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/yn0LYJt/pexels-asad-photo-maldives-1024993.jpg')]">
    <div className="w-full h-full  backdrop-blur-sm">
    <div className="w-full"><Navbar home={true}></Navbar> </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❮</a> 
      <div className="w-3/5 text-white ">{banner}</div>
      <a href="#slide4"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/QK64wKr/pexels-viresh-studio-1444442.jpg')]">
  <div className="w-full h-full  backdrop-blur-sm ">
  <div className="w-full"><Navbar home={true}></Navbar> </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❮</a> 
      <div className="w-3/5 text-white ">{banner}</div>
      <a href="#slide1"  className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex justify-center items-center border-[1px]  my-auto bg-slate-50 ">❯</a>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Banner;