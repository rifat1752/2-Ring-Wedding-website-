
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { serviceContext } from "../Providers/ServiceProvider";
import HBlogs from "../Home/blogs/HBlogs";

const Blogs = () => {
    const {blogs} = useContext(serviceContext)

    return (
        <div>
            <div className="">
              <Navbar></Navbar>
            </div>
            <div>
           <HBlogs></HBlogs>
            </div>
        </div>
    );
};

export default Blogs;