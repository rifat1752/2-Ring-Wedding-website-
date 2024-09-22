import { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ring.png"
import { serviceContext } from "../Providers/ServiceProvider";
import ThemeButton from "./ThemeButton";

const Navbar = ({home}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const {user,LogOut,setThemeColor} = useContext(serviceContext);
    const [open, setOpen]= useState(false);
    const [image,setImage] =useState([])
    console.log("navbar user",user)

    const Clicked =()=>{
        setOpen(!open);
    }
    
    useEffect(()=>{
      localStorage.setItem("theme",theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme",localTheme);
      setThemeColor(localTheme);
    },[theme]);

    const handleToggle=(e)=>{
      if(e.target.checked){
        setTheme("light");
        setThemeColor("light")
      }
      else{
        setTheme("dark");
        setThemeColor("dark")
      }
    }

    return (
        <div className={` ${home? "text-white":(theme=="dark")?"text-white":"text-white md:text-gray-600"}`}>
            <nav className={`md:flex  ${open===true?'h-60':'h-0'}   md:bg-opacity-0 flex-col md:flex-row justify-between   md:h-16 bg-slate-900  rounded  bg-opacity-100 items-center ${open === true?'h-40':''}`}>
            <div className="flex  flex-row justify-between items-center">
               <div className="  p-4 flex items-center float-start">
               <figure className=" w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:8 sm:w-6 sm:h-6"> <img  src={logo} alt="" /></figure>
                <p className="text-xl md:text-2xl lg:text-3xl  ml-1 text-yellow-300  font-nova font-extrabold"><span className="text-[#FF007F]">2</span>Ring</p></div>
                <div className="flex justify-center items-center">
                <div className="float-right mt-1 md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-3xl text-[#FF007F] cursor-pointer " />:<IoMdMenu className="text-3xl text-[#FF007F] cursor-pointer " /> }
               </div>
               <div className="block md:hidden"><ThemeButton theme={theme}  handleToggle={handleToggle}></ThemeButton></div>
                </div>
               


            </div>
            <div className= {`w-36  mt-2 md:w-auto mr-10 pb-2 justify-center items-center    flex flex-col md:flex-row md:transparent rounded  bg-opacity-80 md:bg-opacity-30 absolute md:static ${open === true?'top-4 left-[40%]':'-top-96'} `}>
              



                   <div className="flex flex-col items-center  md:flex-row">
                    <li className="list-none mx-6 text-lg   font-bold"><NavLink to='/' className={({ isActive, isPending }) =>isActive? "active text-[#FF007F] ": isPending? "pending": ""}>Home</NavLink></li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/about' className={({ isActive, isPending }) =>isActive? "active text-[#FF007F] ": isPending? "pending": ""}>About</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/services' className={({ isActive, isPending }) =>isActive? "active text-[#FF007F] ": isPending? "pending": ""}>Services</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/blog' className={({ isActive, isPending }) =>isActive? "active text-[#FF007F] ": isPending? "pending": ""}>Blogs</NavLink> </li>
                   </div>
            
                  
                   {
  user?.email ? (
    <div className="flex items-center">
      <div className="dropdown  w-16   flex  flex-col items-center  dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  avatar">
          <div className="w-10  rounded-full">
            {user?.photoURL ? (
              <img className="h-10 rounded-full" src={user.photoURL} alt={user.displayName} />
            ) : (
              <img
                className="h-10 rounded-full"
                src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                alt="avatar"
              />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="  mt-12 z-[1]   dropdown-content  rounded"
        >
          <Link to="/"  className={`flex justify-center mt-1  pb-1 text-white hover:text-white 
        hover:bg-blue-500 bg-[#FF007F] border-[#FF007F] transition-all duration-300 w-20 h-10 font-bold rounded-full`}>
            <button onClick={LogOut} className="">
              Log Out
            </button>
          </Link>
        </ul>
      </div>
      <li className="md:block hidden">
        <ThemeButton theme={theme} handleToggle={handleToggle}></ThemeButton>
      </li>
    </div>
  ) : (
    <>
      <Link
        to="/login"
        className={`flex justify-center mt-2 pb-1 ${
          home ? "text-white" : theme == "dark" ? "text-white" : "text-white hover:text-white md:text-gray-600"
        } hover:bg-[#FF007F] border-[#FF007F] transition-all duration-300 w-20 h-10 rounded-full`}
      >
        <button className="text-lg font-bold">Log In</button>
      </Link>
      <li className="md:block hidden">
        <ThemeButton theme={theme} handleToggle={handleToggle}></ThemeButton>
      </li>
    </>
  )
}

                   {/* <Link to='/login' className=""><button className="btn btn-info mr-6 text-white">Log In</button></Link> */}
           </div>
           
            </nav>
        </div>
    );
};

export default Navbar;