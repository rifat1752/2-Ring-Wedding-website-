import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const serviceContext = createContext(null);

const googleProvider =new GoogleAuthProvider();

// other context api
const ServiceProvider = ({children}) => {
  const [dataLength , setDataLength] = useState(3) ;
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [likedStatus, setLikedStatus] = useState({});
  const [user, setUser] =useState({});

  //google login
  const googleLogin =()=>{
    return signInWithPopup(auth,googleProvider); 
  }
//email sign up
const CreateUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
}
// sign in
const LogInUser =(email,password)=>{
 return signInWithEmailAndPassword(auth,email,password)
}
const LogOut = ()=>{
return signOut(auth)
}
// sign out

// on auth
useEffect(()=>{

const unsubscribe =  onAuthStateChanged(auth,(user)=>{
  setUser(user);
 });
 return ()=>{unsubscribe()};
},[])
console.log(user);
  // other code


    useEffect(()=>{
        fetch("https://api.npoint.io/8776086b5d73c4ccd7e4")
        .then(res => res.json())
        .then(data =>  setServices(data));
    },[])
 

    useEffect(()=>{
        fetch("https://api.npoint.io/d1a6b8eb525f1a4df29a")
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

   const initialLikedStatus = (post_id) => {
    const initialLikedStatus = localStorage.getItem(`liked_${post_id}`) === "true";
    setLikedStatus((prevLikedStatus) => ({
      ...prevLikedStatus,
      [post_id]: initialLikedStatus,
    }));
  };
  const toggleLikedStatus = (post_id) => {
    setLikedStatus((prevLikedStatus) => ({
      ...prevLikedStatus,
      [post_id]: !prevLikedStatus[post_id],
    }));
  };
    const DataUpdate = (likedStatus) => {
        useEffect(() => {
            Object.keys(likedStatus).forEach((post_id) => {
                localStorage.setItem(`liked_${post_id}`, likedStatus[post_id]);
              });
            }, [likedStatus]);
      };
    


    const serviceInfo ={user,LogOut,LogInUser,CreateUser, services, dataLength,setDataLength,blogs,initialLikedStatus,likedStatus,toggleLikedStatus, DataUpdate,googleLogin,CreateUser}
    return (
        <serviceContext.Provider value={serviceInfo}>
            {children}
        </serviceContext.Provider>
    );
};

export default ServiceProvider;

ServiceProvider.propTypes ={
    children: PropTypes.node
}

