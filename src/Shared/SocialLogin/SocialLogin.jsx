import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { serviceContext } from '../../Providers/ServiceProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleLogin,githubLogin} = useContext(serviceContext);
    const location= useLocation();
    const navigate = useNavigate();
    const handleSocialLogin =(media)=>{
        media()
        .then(result=>{
            navigate(location?.state?location.state:'/')
            console.log(result.user)
        }
        )
        .catch(error=>{console.log(error.message)})
    }

    return (
        <div>
            <div className='text-xl text-center font-semibold'>Continue with </div>
            <div className=' flex justify-center '>
            <FcGoogle onClick={()=>handleSocialLogin(googleLogin)} className=' hover:cursor-pointer text-3xl mr-5'/>
            <FaGithub onClick={()=>handleSocialLogin(githubLogin)} className='text-3xl mr-5 hover:cursor-pointer '/>
            </div>
        </div>
    );
};

export default SocialLogin;