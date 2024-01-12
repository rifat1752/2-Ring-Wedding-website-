import { Link } from "react-router-dom";


const Blog = ({blog}) => {
    const {post_id,post_date,poster_image,post_by,post_title,post_description} = blog;
    return (
            <div className="lg:w-4/6 max-w-5xl bg-slate-50 shadow-xl rounded border border-slate-300 flex lg:flex-row  my-5">
                <div className="image  relative top-0 lg:w-1/3"> 
                  <img className="w-96"  src={poster_image}alt="" />
                  <p className="bg-red-500 absolute top-1/3 text-slate-200 right-0 w-20 h-16 text-lg font-extrabold text-center">{post_date}</p>
                </div>
                <div className="text  w-2/3 p-5">
                    <p className="text-lg text-slate-400 font-bold ">Posted By: {post_by}</p>
                    <h1 className="text-2xl font-bold mt-4">{post_title}</h1>
                    <p className="font-semibold text-justify mt-4 text-slate-600">{post_description}</p>
                    <Link ><button className="mt-5 text-lg font-semibold border-b-2 border-b-red-500 hover:border-b-green-500 hover:text-green-500 text-red-500 ">Read More</button></Link>
                </div>
            </div>
    );
};

export default Blog;