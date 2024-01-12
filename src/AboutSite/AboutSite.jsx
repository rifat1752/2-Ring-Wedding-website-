import Navbar from "../Shared/Navbar";
import logo from "../assets/ring.png"

const AboutSite = () => {
    return (
        <div>
            <div className="bg-slate-600"><Navbar></Navbar></div>
            <div className="flex flex-col items-center ">
            <img className="w-16 h-16 my-5" src={logo} alt="" />
                    <h1 className="text-5xl font-bold my-5">About Our Company</h1>
            </div>
           <div className="flex flex-col items-center">
           <div className="mx-10 mt-16 max-w-screen-xl  lg:mx-20 text-justify">
           <div>
                <h1 className="text-2xl font-semibold my-2">
                Welcome to <span className="text-pink-500">2</span><span className="text-yellow-500">RING</span>- Crafting Unforgettable Love Stories
                </h1>
                <p className="text-lg font-semibold text-slate-500 mb-5">At <span className="text-pink-500">2</span><span className="text-yellow-500">RING</span>, we believe that every couple's journey towards matrimony is a unique narrative, deserving of an extraordinary celebration. With a passion for creating magical moments and a commitment to unparalleled service, we stand as your dedicated partner in turning your wedding dreams into a breathtaking reality.</p>
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