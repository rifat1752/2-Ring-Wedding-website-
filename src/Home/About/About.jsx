import { Link } from "react-router-dom";
import image from "../../assets/about.png"
import logo from "../../assets/ring.png"



const About = ({button}) => {

    return (
        <div className={`min-h-screen mx-5 border border-slate-200 ${button? "my-16":"my-0"} rounded-lg flex flex-col md:flex-row justify-evenly items-center  bg-center bg-100% bg-no-repeat  bg-[url('https://i.ibb.co/f9NszjT/about-bg.jpg')]`}>
            <div   data-aos={window.screen.width < 720 ? "zoom-in" :"fade-right" } className="md:w-5/12  px-5    flex flex-col justify-center items-center ">
                    <img data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"}  data-aos-delay={window.screen.width < 720 ? "" : "500"} className="w-14 h-12  mt-10" src={logo} alt="" />
                    <h1  className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">About Our Company</h1>
                    <p  className="md:block hidden 2xl:text-lg courgette-regular font-semibold xl:text-base lg:text-sm text-xs text-justify  my-5 text-gray-600"><i>"Embark on this exciting journey with us, and let's bring your wedding vision to life. Whether you have a clear picture of your dream day or are looking for inspiration, our team is here to guide you every step of the way. Your love story deserves to be celebrated with elegance, and we are honored to be a part of it."</i></p>
                    {button ? (
        <Link dto='/about' className=" hidden md:flex my-5  text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-36 h-12 rounded-full  mx-auto">
          <button className=" text-lg font-bold  mx-auto pb-1">Read More</button>
        </Link>
      ) : (
        ""
      )}
            </div>
            <div className="w-full my-5  sm:mx-10 md:mx-0 md:w-5/12 ">
                <img data-aos="zoom-in" className="w-3/5 md:w-full mx-auto " src={image} alt="" />
                <p data-aos="zoom-in" className="block md:hidden 2xl:text-lg xl:text-base lg:text-sm text-xs text-justify courgette-regular font-semibold my-5 mx-5 sm:mx-10 text-gray-600"><i>"Embark on this exciting journey with us, and let's bring your wedding vision to life. Whether you have a clear picture of your dream day or are looking for inspiration, our team is here to guide you every step of the way. Your love story deserves to be celebrated with elegance, and we are honored to be a part of it."</i></p>
                {button ? (
        <Link data-aos="zoom-in" to='/about' className=" md:hidden flex my-5  text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-36 h-12 rounded-full  mx-auto">
          <button className=" text-lg font-bold  mx-auto pb-1">Read More</button>
        </Link>
      ) : (
        ""
      )}
            </div>
        </div>
    );
};

export default About;