import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ring.png"
import { serviceContext } from "../Providers/ServiceProvider";

const Navbar = ({home}) => {
    const {user,LogOut} = useContext(serviceContext);
    const [open, setOpen]= useState(false);
    const [image,setImage] =useState([])
    console.log("navbar user",user)

    const Clicked =()=>{
        setOpen(!open);
    }


    return (
        <div className={` ${home? "text-white":"md:text-slate-800 text-white"}   `}>
            <nav className={`md:flex  ${open===true?'h-56':'h-0'}   md:bg-opacity-0 flex-col md:flex-row justify-between   md:h-16 bg-slate-900  rounded  bg-opacity-100 items-center ${open === true?'h-40':''}`}>
            <div className="flex  flex-row justify-between items-center">
               <div className="  p-4 flex items-center float-start">
               <figure className=" w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:8 sm:w-6 sm:h-6"> <img  src={logo} alt="" /></figure>
                <p className="md:text-2xl lg:text-3xl  ml-1 text-yellow-300  font-nova font-extrabold"><span className="text-[#FF007F]">2</span>Ring</p></div>
               <div className="float-right p-2 md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-4xl text-yellow-300 cursor-pointer " />:<IoMdMenu className="text-4xl text-yellow-300 cursor-pointer " /> }
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
                    user?.email ?<div className="flex items-center">
                          <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                             <div className="w-10 mr-2 rounded-full">
                                {user?.photoURL?<img className="h-10 rounded-full" src={user.photoURL} alt={user.displayName}/>:
                                <img className="h-10 rounded-full" src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg" />}
                             <img className="h-10 rounded-full" src={image} alt={user.displayName} />
                             </div>
                            </div>
                             <ul tabIndex={0} className="mt-3 z-[1] p-2  menu menu-sm dropdown-content bg-white  rounded-box">
                               {/* <li>
                                <a className="justify-between">
                                  Profile
                                  <span className="badge">New</span>
                                </a>
                              </li>
                              <li><a>Settings</a></li> */}
                              <Link to='/login' className=""><button onClick={LogOut} className="btn w-24 mt-2 btn-info  text-white">Log out</button></Link>
                             </ul>
                          </div>
                    </div>
                    :
                    <Link to='/login' className={`flex  justify-center mt-2 pb-1  ${home? "text-white":"md:text-slate-800 hover:text-white text-white"}   hover:bg-[#FF007F] border-[#FF007F] transition-all duration-300 w-20 h-10 rounded-full`}><button className="text-lg font-bold">Log In</button></Link>
                   }
                   {/* <Link to='/login' className=""><button className="btn btn-info mr-6 text-white">Log In</button></Link> */}
           </div>
            </nav>
        </div>
    );
};

export default Navbar;