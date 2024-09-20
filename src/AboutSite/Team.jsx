
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Team.css';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Team = () => {
    const teams = [
        {
            'image': 'https://i.ibb.co.com/wYnnrtS/diverse-group-co-workers-having-casual-discussion-office.jpg',
            'name': 'Tailored Experience',
            'description': 'We understand that no two love stories are alike. Our team is dedicated to creating personalized, tailor-made experiences that speak to your unique preferences and style. From intimate ceremonies to grand celebrations, we ensure that your wedding day is a true reflection of your love.'
        },
        {
            'image': 'https://i.ibb.co.com/7XvFzBf/business-people-posing-together-office.jpg',
            'name': 'Exceptional Planning',
            'description': 'Our seasoned wedding planners bring creativity, precision, and attention to detail to every event. From the initial consultation to the last dance, we are committed to flawlessly executing your vision, leaving you free to savor each magical moment.'
        },
        {
            'image': "https://i.ibb.co.com/FHzTdYr/businesspeople-meeting-office-working.jpg",
            'name': 'Vendor Relationships',
            'description': 'Over the years, we have cultivated strong relationships with the best vendors in the industry. This enables us to offer you a curated selection of trusted professionals, ensuring that every aspect of your wedding meets the highest standards of excellence.'
        }
    ];
   
    return (
        <div className='relative   rounded-2xl '>
             
        <Swiper navigation={true}
modules={[Navigation, Autoplay]}
autoplay={{
delay: 3000, // Change slide every 3 seconds
disableOnInteraction: false, // Keep autoplay even after user interacts
}} className="mySwiper max-w-80 rounded-2xl shadow-lg shadow-slate-500 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl   max-h-screen ">
            {teams.map((team, index) => (
                <SwiperSlide className='rounded-2xl  ' key={index}>
                    <img className='h-full rounded-2xl  brightness-90 blur-[2px] object-cover' src={team.image} alt={`Banner ${index + 1}`} />
                   <div className='absolute flex justify-center h-full bg-slate-800 bg-opacity-45'>
                   <div  className='  flex flex-col  items-center w-2/3  sm:w-5/6 md:w-3/5 xl:w-1/2  h-full  xl:h-3/4 justify-center      '>
                   <h1 className='text-slate-50 font-bold text-center text-xl sm:text-4xl lg:text-5xl mt-5'>{team.name}</h1>
                   <p  className='text-slate-200 text-xs sm:text-sm lg:text-lg  courgette-regular  text-center mt-10 ms:mt-10 '><i>{team.description}</i></p>
                   </div>
                   </div>
                    
                </SwiperSlide>
            ))}
        </Swiper>
    
    </div>
    );
};

export default Team;
