const GroomComment = () => {
  return (
    <div className="pt-10 mx-5 rounded-xl ">
      <div className="carousel bg-red-50 w-full rounded-xl border border-slate-200">
        <div data-aos='fade-up' id="item1" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/K5gZ1B2/1.jpg" alt="" />
         <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
         <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600"><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item2" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/mR48FSM/2.jpg" alt="" />
         <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
         <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600"><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item3" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/pf9F8XS/3.jpg" alt="" />
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600"><i>"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</i></p>
        </div>
        <div data-aos='fade-up' id="item4" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/prgkSP0/4.jpg" alt="" />
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Alice and Bob</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 text-gray-600"><i>"We couldn't be happier with the service provided by 2Ring. The user-friendly interface made planning our wedding a breeze."</i></p>
          
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default GroomComment;
