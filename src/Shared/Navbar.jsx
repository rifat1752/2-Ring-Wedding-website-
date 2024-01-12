import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ring.png"

const Navbar = () => {
    const [open, setOpen]= useState(false);
   
    const Clicked =()=>{
        setOpen(!open);
    }
    return (
        <div>
            <nav className={`md:flex  ${open===true?'h-56':'h-0'} bg-slate-900   md:bg-opacity-0 flex-col md:flex-row justify-between   md:h-16 text-bg-white    bg-opacity-100 items-center ${open === true?'h-40':''}`}>
            <div className="flex  flex-row justify-between items-center">
               <div className="  p-4 flex items-center float-start">
               <figure className=" w-8 h-8"> <img  src={logo} alt="" /></figure>
                <p className="text-3xl ml-1 text-yellow-300 lg:text-white font-nova font-extrabold"><span className="text-pink-500">2</span>Ring</p></div>
               <div className="float-right p-2 md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-4xl text-yellow-300 cursor-pointer " />:<IoMdMenu className="text-4xl text-yellow-300 cursor-pointer " /> }
               </div>
            </div>
            <div className= {`w-36 md:w-auto  pb-2 justify-center items-center text-white  flex flex-col md:flex-row md:transparent rounded  bg-opacity-80 md:bg-opacity-0 absolute md:static ${open === true?'top-4 left-[40%]':'-top-96'} `}>
             
                   <div className="flex flex-col md:flex-row">
                     <li className="list-none mx-6 text-lg  mb-2 font-bold"><NavLink to='/' className={({ isActive, isPending }) =>isActive? "active text-pink-500 border-b-4 border-pink-400": isPending? "pending": ""}>Home</NavLink></li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/about' className={({ isActive, isPending }) =>isActive? "active text-pink-500 border-b-4 border-pink-400": isPending? "pending": ""}>About</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/services' className={({ isActive, isPending }) =>isActive? "active text-pink-500 border-b-4 border-pink-400": isPending? "pending": ""}>Services</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/blog' className={({ isActive, isPending }) =>isActive? "active text-pink-500 border-b-4 border-pink-400": isPending? "pending": ""}>Blogs</NavLink> </li>
                   <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/contact' className={({ isActive, isPending }) =>isActive? "active text-pink-500 border-b-4 border-pink-400": isPending? "pending": ""}>Contact Us</NavLink> </li>
                   </div>
                   <Link className=""><button className="btn btn-info mr-6 text-white">Log In</button></Link>
           </div>
            </nav>
        </div>
    );
};

export default Navbar;