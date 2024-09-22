import { Link } from "react-router-dom";
import About from "../Home/About/About";
import Navbar from "../Shared/Navbar";
import logo from "../assets/ring.png";
import Team from "./Team";
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";


const AboutSite = () => {
  const { themeColor,setThemeColor} = useContext(serviceContext);
   

    return (
        <div className="">
            <div  className="w-full "><Navbar></Navbar></div>
          <div className="mt-16 md:mt-0">  <About></About></div>
           <div className="flex my-14 flex-col   items-center justify-center ">
           <div className="   text-center md:text-justify ">
            <div className={`flex mx-5 ${(themeColor=="dark")?"border-slate-700 bg-[#191e24] text-slate-300":" border-slate-200 text-slate-600 bg-slate-50"} border rounded-xl flex-col-reverse justify-center items-center md:flex-row gap-5 min-h-screen `} >
                <div className="w-full mb-10 md:mb-0 md:w-5/12 flex flex-col justify-center items-center ">
                <figure data-aos="flip-left" data-aos-duration="1000" className="2xl:w-96 w-64 h-96 sm:w-80 sm:h-96 2xl:h-[450px] group bg-slate-300 border-2 rounded-lg relative transition-all duration-300 hover:rotate-3">
                   <img className="2xl:w-96 w-64 h-96 sm:w-80 sm:h-96 2xl:h-[450px] bg-slate-50 shadow-lg shadow-slate-600 group-hover:rotate-1  group-hover:shadow-slate-700 rounded-lg border p-2 object-cover absolute -top-2 -left-1 z-50   transition-all duration-300 ease-in-out" 
                      src='https://i.ibb.co/Wy4G7Pg/Incorporating-Cultural-Traditions-into-Your-Wedding.jpg' 
                       alt="" /> 
                </figure>
                <p data-aos="zoom-in"  className="md:hidden block 2xl:text-lg xl:text-base lg:text-sm text-xs   font-semibold courgette-regular  2xl:mt-10 mx-5 sm:mx-10 my-5"><i>At <span className="text-[#FF007F]">2</span><span className="text-yellow-500">Ring</span>, we believe that every couple's journey towards matrimony is a unique narrative, deserving of an extraordinary celebration. With a passion for creating magical moments and a commitment to unparalleled service, we stand as your dedicated partner in turning your wedding dreams into a breathtaking reality.</i></p>

                   </div>
                   <div  data-aos={window.screen.width < 720 ? "zoom-in" : "fade-right" } 
                    data-aos-duration="1000" 
                    data-aos-delay={window.screen.width < 720 ?"" : "300" }
                    className="flex  flex-col justify-center items-center px-5  sm:px-10 md:px-5 lg:px-10 w-full md:w-6/12 ">
                   <h1   className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-center text-[#FF007F] font-bold mt-10 mb-5">
                     Welcome to 2Ring Crafting Unforgettable Love Stories
                </h1>
                 <p className="hidden md:block 2xl:text-lg xl:text-base lg:text-sm text-sm    font-semibold courgette-regular 2xl:mt-10 my-5"><i>At <span className="text-[#FF007F]">2</span><span className="text-yellow-500">Ring</span>, we believe that every couple's journey towards matrimony is a unique narrative, deserving of an extraordinary celebration. With a passion for creating magical moments and a commitment to unparalleled service, we stand as your dedicated partner in turning your wedding dreams into a breathtaking reality.</i></p>
                </div>
            </div>
            {/* story */}
            <div   className=" story my-10   py-16  rounded-xl ">
            <div data-aos="fade-down" className=" ">
                <h1 className="2xl:text-5xl  md:text-4xl text-2xl  text-center text-[#FF007F] font-bold  mb-5">
                Our Teams
                </h1>
                <p className={`2xl:text-lg xl:text-base lg:text-sm text-xs text-center  font-semibold courgette-regular ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}   2xl:mt-10 mx-5 md:mx-10 my-5`}><i>"Founded with love and fueled by a deep appreciation for the intricacies of wedding planning, <span className="text-pink-500">2</span><span className="text-yellow-500">Ring</span> was born. Our journey began with the vision of providing couples with a stress-free, joyous wedding experience, where every detail is meticulously curated to reflect the essence of their love story."</i></p>
            </div>
           <div data-aos="fade-up" className=" w-11/12   mx-auto  ">
           <Team></Team>
           </div>
            </div>
           
                <div  className={`${(themeColor=="dark")?"border-slate-700 bg-[#191e24] text-slate-300":" border-slate-200 text-slate-600 bg-slate-50"} mx-5  my-10 py-10 border rounded-xl`}>
                <h1 data-aos="fade-down" className="2xl:text-5xl  md:text-4xl text-2xl  text-center text-[#FF007F] font-bold  mb-5">Let's Begin Your Journey</h1>
                <p data-aos="fade-down"   className="2xl:text-lg xl:text-base lg:text-sm text-xs text-center  font-semibold courgette-regular  2xl:mt-10 mx-5 md:mx-10 my-5"><i>"Embark on this exciting journey with us, and let's bring your wedding vision to life. Whether you have a clear picture of your dream day or are looking for inspiration, our team is here to guide you every step of the way. Your love story deserves to be celebrated with elegance, and we are honored to be a part of it."</i></p>
                <Link data-aos="fade-up" to='/service' className="flex my-5  text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-48 h-12 rounded-full  mx-auto">
                       <button className="text-lg font-bold  mx-auto pb-1">Get what you want</button>
                 </Link>
            </div>
           </div>
           </div>
        </div>
    );
};

export default AboutSite;