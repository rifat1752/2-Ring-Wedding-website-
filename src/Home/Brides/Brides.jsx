import img1 from "../../assets/ber_img.jpg"
import img2 from "../../assets/ber_img1.jpg"
import img3 from "../../assets/ber_img2.jpg"
import logo1 from "../../assets/ring.png"
import logo2 from "../../assets/round.png"


const Brides = () => {
    return (
        <div>
          <div>
            <div>
                <div className="w-full my-10  py-20  flex flex-col justify-center items-center">
                    <img className="w-24 h-24 my-5" src={logo1} alt="" />
                    <h1 className="text-5xl font-bold my-5">Bridesmaids And Groomsmen</h1>
                    <i className="text-lg text-center w-3/4 font-medium my-5 text-gray-600">"We understand that the people standing beside you on your wedding day are not just attendants; they are an integral part of your love story.ensuring that your bridal party looks stunning, feels supported, and contributes to the joyous atmosphere of your celebration."</i>
                </div>
                <div className="min-h-screen  grid lg:grid-cols-3 justify-items-center">
                     <div className="flex flex-col w-95">
                        <img className="w-95 h-96 rounded-xl" src={img1} alt="" />
                        <p className="text-center mt-5 text-3xl font-semibold">Voluptate</p>
                     </div>
                     <div className="flex flex-col w-95  self-end h-[450px]">
                        <img className="w-95 h-96 self-end rounded-xl" src={img2} alt="" />
                        <p className="text-center mt-5 text-3xl font-semibold">Voluptate</p>
                     </div>
                     <div className="flex flex-col  w-95">
                        <img className="w-95 h-96 rounded-xl" src={img3} alt="" />
                        <p className="text-center mt-5 text-3xl font-semibold">Voluptate</p>
                     </div>
                </div>
            </div>
            <div className="flex my-32">
                <img className="mx-auto w-32" src={logo2} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Brides;