import { Link,  useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";
import logo from '../assets/ring.png'
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";


const Registration = () => {
    const{CreateUser} = useContext(serviceContext);
    const navigate = useNavigate();

    const handleRegister =e=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photo');
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
        CreateUser(email, password)
        .then((result) => {
          const user = result.user;
          
          // Update the user's profile with the displayName and photoURL
          updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              Swal.fire({
                title: "Great!",
                text: "Your Account has been created!",
                icon: "success",
              });
              navigate("/");
            })
            .catch((error) => console.log(error.message));
        })
        .catch((error) => console.log(error.message));
    }
  return (
    <div>
         <div className="  ">
              <Navbar></Navbar>
            </div>
      <div className="hero min-h-screen rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos={window.screen.width < 720 ? "zoom-in" :"fade-right" } className="text-center flex flex-col items-center">
          <img data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"}  data-aos-delay={window.screen.width < 720 ? "" : "500"} src={logo} alt="" />
            <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Register Now!</h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600">
           <i> Welcome to   <span className="  text-yellow-400  font-nova font-extrabold"><span className="text-pink-500">2</span>Ring</span> – the ultimate destination for seamless wedding planning! Register now to embark on a journey where your dream wedding becomes a reality. By creating an account, you unlock a world of personalized features designed to simplify and enhance your wedding planning experience.</i>
            </p>
          </div>
          <div data-aos={window.screen.width < 720 ? "zoom-in" :"fade-down" }  className="border border-[#ff006a5d] rounded-lg  shrink-0 w-80 md:w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="">
                  <span className="text-lg text-slate-700 font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="h-10 border-b-2 outline-none border-[#FF007F] transition-all duration-300 focus:border-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg text-slate-700 font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="h-10 border-b-2 outline-none border-[#FF007F] transition-all duration-300 focus:border-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg text-slate-700 font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="h-10 border-b-2 outline-none border-[#FF007F] transition-all duration-300 focus:border-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg text-slate-700 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="h-10 border-b-2 outline-none border-[#FF007F] transition-all duration-300 focus:border-blue-500"
                  required
                />
                <label className="flex justify-center items-center">
                    <p className="text-xs pt-2 ">Already Have an Account?</p>
                 <Link to='/login' className="text-sm  pt-2  font-medium hover:underline text-green-600">Log in</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="bg-[#FF007F] w-28 mx-auto h-10 rounded-full text-white text-base hover:text-base font-semibold shadow-md hover:bg-blue-500  transition duration-500 shadow-slate-400">Register</button>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
