import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";
import Swal from 'sweetalert2';

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
        <div>
            <div className=" md:bg-slate-600 ">
              <Navbar></Navbar>
            </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log In Now!</h1>
            <p className="py-6 text-lg italic">
            Welcome to   <span className=" ml-1 text-yellow-400  font-nova font-extrabold"><span className="text-pink-500">2</span>Ring</span> – the ultimate destination for seamless wedding planning! Register now to embark on a journey where your dream wedding becomes a reality. By creating an account, you unlock a world of personalized features designed to simplify and enhance your wedding planning experience.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="flex ">
                    <p className="text-xs pt-2 ">Don't Have an Account?</p>
                 <Link to='/register' className="text-sm  pt-2 mr-10 font-medium hover:underline text-green-600">Register here</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Log in</button>
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