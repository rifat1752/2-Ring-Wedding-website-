import About from "../Home/About/About";
import Navbar from "../Shared/Navbar";
import logo from "../assets/ring.png"

const AboutSite = () => {
    return (
        <div className="">
            <div  className="w-full "><Navbar></Navbar></div>
            <About></About>
           <div className="flex flex-col items-center">
           <div className="mx-5 mt-16 max-w-screen-xl  text-justify">
            <div className=" flex bg-slate-50 rounded-xl flex-row gap-5 min-h-screen ">
                <div className="w-5/12 flex justify-center items-center ">
                   <figure className="w-80 h-96  bg-slate-300  relative ">
                      <img className="bg-slate-50 p-2 object-cover w-80 absolute -top-4 -left-4   z-50 h-96" src='https://i.ibb.co.com/Wy4G7Pg/Incorporating-Cultural-Traditions-into-Your-Wedding.jpg' alt="" />       
                    </figure>
                   </div>
                   <div  className="flex flex-col justify-center items-center px-10  w-6/12 ">
                   <h1 className="text-4xl  text-center text-[#FF007F] font-bold mb-10">
                     Welcome to 2Ring Crafting Unforgettable Love Stories
                </h1>
                 <p className="text-lg   font-semibold text-slate-500 mb-5">At <span className="text-pink-500">2</span><span className="text-yellow-500">Ring</span>, we believe that every couple's journey towards matrimony is a unique narrative, deserving of an extraordinary celebration. With a passion for creating magical moments and a commitment to unparalleled service, we stand as your dedicated partner in turning your wedding dreams into a breathtaking reality.</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold my-2">
                Our Story:
                </h1>
                <p className="text-lg font-semibold text-slate-500 mb-5">Founded with love and fueled by a deep appreciation for the intricacies of wedding planning, <span className="text-pink-500">2</span><span className="text-yellow-500">RING</span> was born. Our journey began with the vision of providing couples with a stress-free, joyous wedding experience, where every detail is meticulously curated to reflect the essence of their love story.</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold my-2">
                What Sets Us Apart:
                </h1>
                <p className="text-lg font-semibold text-slate-500 mb-5">
                <i className="text-black">Tailored Experiences:</i> We understand that no two love stories are alike. Our team is dedicated to creating personalized, tailor-made experiences that speak to your unique preferences and style. From intimate ceremonies to grand celebrations, we ensure that your wedding day is a true reflection of your love.
<br />
                 <i className="text-black">Exceptional Planning:</i> Our seasoned wedding planners bring creativity, precision, and attention to detail to every event. From the initial consultation to the last dance, we are committed to flawlessly executing your vision, leaving you free to savor each magical moment.
<br />
                <i className="text-black">Vendor Relationships:</i> Over the years, we have cultivated strong relationships with the best vendors in the industry. This enables us to offer you a curated selection of trusted professionals, ensuring that every aspect of your wedding meets the highest standards of excellence.
                </p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold my-2">Our Promise:</h1>
                <p className="text-lg font-semibold text-slate-500 mb-5">At <span className="text-pink-500">2</span><span className="text-yellow-500">RING</span>, we view our role not just as wedding planners, but as architects of unforgettable memories. We promise to infuse every moment of your special day with love, creativity, and meticulous planning. From venue selection to the final send-off, we are dedicated to creating an enchanting experience that exceeds your expectations.</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold my-2">Let's Begin Your Journey:</h1>
                <p className="text-lg font-semibold text-slate-500 mb-5">Embark on this exciting journey with us, and let's bring your wedding vision to life. Whether you have a clear picture of your dream day or are looking for inspiration, our team is here to guide you every step of the way. Your love story deserves to be celebrated with elegance, and we are honored to be a part of it.</p>
            </div>
           </div>
           </div>
        </div>
    );
};

export default AboutSite;