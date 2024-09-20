import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../Navbar';

const Banner1 = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const bannerImage = [
        { image: "https://i.ibb.co/HFTk92b/groom-putting-ring-bride-s-finger.jpg",
            heading:" A Moment to Remember",
            Description: "Witness the pure joy of a love sealed with a promise. At 2 Ring, we celebrate the beauty of commitment, one precious ring at a time."
         },
        { image: "https://i.ibb.co/kKGb07S/bride-groom-couple-wedding-photos.jpg" ,
            heading: "Together, Forever Begins",
            Description: "Embrace the magic of togetherness as two hearts become one. Let 2 Ring be part of your journey to everlasting love."
        },
        { image: "https://i.ibb.co/yn0LYJt/pexels-asad-photo-maldives-1024993.jpg",
            heading:"Love by the Shoreline",
            Description: "An intimate vow under the sky, with waves as the soundtrack. Create unforgettable memories with 2 Ring’s touch of elegance."
         },
        { image: "https://i.ibb.co/QK64wKr/pexels-viresh-studio-1444442.jpg" ,
            heading:"A Love Stepped in Tradition",
            Description:"Celebrate your unique heritage and timeless love. 2 Ring adds a modern twist to every cherished tradition."
        }
    ];

    return (
        <div className=''>
             
            <Swiper navigation={true}
  modules={[Navigation, Autoplay]}
autoplay={{
    delay: 3000, // Change slide every 3 seconds
    disableOnInteraction: false, // Keep autoplay even after user interacts
  }} className="mySwiper max-w-screen-2xl   max-h-screen ">
     <div className="w-full  top-0 absolute z-10">
                            <Navbar home={true}></Navbar>
                        </div>
                {bannerImage.map((banner, index) => (
                    <SwiperSlide key={index} className=' '>
                        
                        <img className='h-full  brightness-90 blur-[3px] object-cover' src={banner.image} alt={`Banner ${index + 1}`} />
                       <div  className='absolute    flex flex-col pt-5  text-center px-10 sm:px-10 top-5 sm:top-0  sm:w-5/6 md:w-3/5 xl:w-1/2  h-full  xl:h-3/4 justify-center    '>
                       <h1 data-aos="fade-right" data-aos-duration="1000" className='text-[#FF007F]  font-bold text-xl sm:text-4xl lg:text-5xl mt-5'>{banner.heading}</h1>
                       <p data-aos="fade-right" data-aos-duration="1000" className='text-slate-100 text-xs  sm:text-base lg:text-xl   mt-2 ms:mt-10 '>{banner.Description}</p>
                       <Link
                    to="/register"
                    className="flex my-5 text-white hover:text-slate-100 bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-24 h-8 sm:w-36 sm:h-12 rounded-full mx-auto "
                >
                    <button className=" text-base sm:text-lg font-bold mx-auto sm:pb-1"> Sign Up</button>
                </Link>
                       </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        
        </div>
       
    );
};

export default Banner1;