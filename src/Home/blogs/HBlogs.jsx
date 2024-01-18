import { useContext, useEffect, useState } from "react";
import logo1 from "../../assets/ring.png"
import HBlog from "./HBlog";
import { serviceContext } from "../../Providers/ServiceProvider";
import { Link } from "react-router-dom";

const HBlogs = () => {
  const {blogs} = useContext(serviceContext)
    return (
        <div className="my-10">
             <div>
            <div className="w-full  max-w-7xl mx-auto py-20  flex flex-col justify-center items-center">
                    <img className="w-24 h-24 my-5" src={logo1} alt="" />
                    <h1 className="text-5xl text-center font-bold w-3/4 my-5">Welcome to Our Wedding Blog</h1>
                    <p className="text-lg text-justify w-3/4 font-medium my-5 text-gray-600">we believe that every love story deserves to be celebrated uniquely. Our blog is a dedicated space where we share inspiration, tips, and stories to help you navigate the exciting journey of planning your dream wedding.Step into a world of enchanting wedding tales, where we recount the magic of real celebrations. </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    blogs.slice(0,3).map(blog =><HBlog key={blog.post_id} blog={blog}></HBlog>)
                }
            </div>
            <div className="flex"><Link className="mx-auto" to='/blog'><button className="btn btn-outline btn-success">See more</button></Link></div>
            </div>
        </div>
    );
};

export default HBlogs;