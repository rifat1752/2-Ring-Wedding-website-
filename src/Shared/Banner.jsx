import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Banner = () => {
    const banner = < >
    <div>
        <h1 className="text-4xl md:text-7xl my-5   text-center   text-pink-400 font-extrabold"><span className="text-slate-100">Wedding </span>Couple</h1>
        <p className="text-base md:text-lg my-5 text-justify text-white font-semibold backdrop-blur-3xl">A wedding is a beautiful celebration that marks the union of two individuals embarking on a journey of lifelong companionship. The couple, dressed in elegant attire, stands at the center of attention, surrounded by the warmth and joy of their loved ones. As they exchange vows and promises of love, the atmosphere is filled with anticipation, excitement, and the promise of a shared future.</p>
        <Link className="flex my-5"><button className="btn btn-info text-lg font-semibold text-white mx-auto">Services</button></Link>
    </div>
                   </>
    return (
        <div>
        <div className="carousel min-h-screen w-full">
            <div id="slide1" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/HFTk92b/groom-putting-ring-bride-s-finger.jpg')] backdrop-blur-md">
            <div className="w-full h-full relative  backdrop-blur-sm">
              <div className="w-full absolute z-10"><Navbar></Navbar> </div>  
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle  my-auto">❮</a> 
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a href="#slide2" className="btn btn-circle  my-auto">❯</a>
              </div>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full  bg-cover bg-[url('https://i.ibb.co/kKGb07S/bride-groom-couple-wedding-photos.jpg')]">
         <div className="w-full h-full  backdrop-blur-sm">
           <div className="w-full"><Navbar></Navbar> </div>  
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle  my-auto">❮</a> 
            <div className="w-3/5 text-white ">{banner}</div>
            <a href="#slide3" className="btn btn-circle  my-auto">❯</a>
           </div>
         </div>
        </div> 
  
  <div id="slide3" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/yn0LYJt/pexels-asad-photo-maldives-1024993.jpg')]">
    <div className="w-full h-full  backdrop-blur-sm">
    <div className="w-full"><Navbar></Navbar> </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle  my-auto">❮</a> 
      <div className="w-3/5 text-white ">{banner}</div>
      <a href="#slide4" className="btn btn-circle  my-auto">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co/QK64wKr/pexels-viresh-studio-1444442.jpg')]">
  <div className="w-full h-full  backdrop-blur-sm ">
  <div className="w-full"><Navbar></Navbar> </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle  my-auto">❮</a> 
      <div className="w-3/5 text-white ">{banner}</div>
      <a href="#slide1" className="btn btn-circle  my-auto">❯</a>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Banner;