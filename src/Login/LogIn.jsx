import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";
import Swal from 'sweetalert2';
import logo from '../assets/ring.png'

const LogIn = () => {
    const {LogInUser} = useContext(serviceContext);
    const location= useLocation();
    const navigate = useNavigate()


    const handleLogIn =e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password =form.get('password');
    

        // validation
        if(password.length<6){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "password should be atlest 6 characters",
              });
              
        }
        //create user
        LogInUser(email,password)
        .then(result=>{
            navigate(location?.state?location.state:'/')
            Swal.fire({
                title: "Great!",
                text: "Log in Successful!",
                icon: "success"
              });   
        })
        .catch(error=>console.log(error.message))
    }

   

   


    return (
        <div className="mx-5 rounded-xl">
            <div className="  ">
              <Navbar></Navbar>
            </div>
      <div className=" mt-16 md:mt-0 hero min-h-screen rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos={window.screen.width < 720 ? "zoom-in" :"fade-right" } className="text-center flex flex-col items-center">
            <img data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"}  data-aos-delay={window.screen.width < 720 ? "" : "500"} src={logo} alt="" />
            <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Log In Now!</h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600">
          <i>  Welcome to   <span className=" ml-1 text-yellow-400  font-nova font-extrabold"><span className="text-pink-500">2</span>Ring</span> – the ultimate destination for seamless wedding planning! Register now to embark on a journey where your dream wedding becomes a reality. By creating an account, you unlock a world of personalized features designed to simplify and enhance your wedding planning experience.
          </i>  </p>
          </div>
          <div data-aos={window.screen.width < 720 ? "zoom-in" :"fade-down" } className=" border border-[#ff006a5d] rounded-lg  shrink-0  w-64 sm:w-80 shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              
              <div className="form-control">
                <label className="">
                  <span className="text-lg text-slate-700 font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  className=" h-10 border-b-2 outline-none border-[#FF007F] transition-all duration-300 focus:border-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="mt-2">
                  <span className="text-lg text-slate-700 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="h-10 border-b-2 outline-none border-[#FF007F] focus:border-blue-500"
                  required
                />
                <label className=" mt-2 ">
                    <div className="text-xs  flex  items-center">Don't Have an Account? <Link to='/register' className="text-xs  ml-2 font-medium hover:underline text-green-600">Register here</Link></div>
                 
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className=" bg-[#FF007F] w-20 mx-auto h-8 rounded-full text-white text-base hover:text-base font-semibold shadow-md hover:bg-blue-500  transition duration-500 shadow-slate-400">Log in</button>
              </div>
              <div>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default LogIn;