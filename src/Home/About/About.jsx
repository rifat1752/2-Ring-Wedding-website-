import { Link } from "react-router-dom";
import image from "../../assets/about.png"
import logo from "../../assets/ring.png"

const About = ({button}) => {
    return (
        <div className="min-h-screen mx-5 my-10 rounded-lg flex flex-col lg:flex-row justify-evenly items-center  bg-center bg-100% bg-no-repeat  bg-[url('https://i.ibb.co/f9NszjT/about-bg.jpg')]">
            <div className="lg:w-5/12  px-5 h-full my-10 py-20  flex flex-col justify-center items-center md:">
                    <img className="w-16 h-16 my-5" src={logo} alt="" />
                    <h1 className="text-4xl text-[#FF007F] font-bold my-5">About Our Company</h1>
                    <p className="text-lg text-justify font-medium my-5 text-gray-600">"Embark on this exciting journey with us, and let's bring your wedding vision to life. Whether you have a clear picture of your dream day or are looking for inspiration, our team is here to guide you every step of the way. Your love story deserves to be celebrated with elegance, and we are honored to be a part of it."</p>
                    {button ? (
        <Link to='/about' className="flex my-5  text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-36 h-12 rounded-full  mx-auto">
          <button className="text-lg font-bold  mx-auto pb-1">Read More</button>
        </Link>
      ) : (
        ""
      )}
            </div>
            <div className="image h-full lg:w-5/12 ">
                <img className="" src={image} alt="" />
            </div>
        </div>
    );
};

export default About;