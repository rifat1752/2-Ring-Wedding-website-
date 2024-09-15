import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";




const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto bg-base-100">
            {/* <Navbar></Navbar> */}
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
           </div>
    );
};

export default Root;