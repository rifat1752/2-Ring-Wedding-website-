import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Root = () => {
    useEffect(() => {
        Aos.init({
          duration: 800,  // Sets the animation duration to 1500ms
        //   easing: 'linear' // Correct way to set easing to linear
        });
        Aos.refresh();
      }, []);
      
    return (
        <div className="max-w-screen-2xl mx-auto  bg-base-100">
            {/* <Navbar></Navbar> */}
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
           </div>
    );
};

export default Root;