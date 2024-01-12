import { Outlet } from "react-router-dom";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";



const Root = () => {
    return (
        <div>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;