const GroomComment = () => {
  return (
    <div className="pt-10">
      <div className="carousel bg-red-50 w-full">
        <div id="item1" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/K5gZ1B2/1.jpg" alt="" />
         <h1 className="text-3xl font-bold my-4">Alice and Bob</h1>
         <p className="text-lg font-medium my-4 text-center mx-5 text-slate-600 italic">"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</p>
        </div>
        <div id="item2" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
         <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/mR48FSM/2.jpg" alt="" />
         <h1 className="text-3xl font-bold my-4">Alice and Bob</h1>
         <p className="text-lg font-medium my-4 text-center mx-5 text-slate-600 italic">"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</p>
        </div>
        <div id="item3" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/pf9F8XS/3.jpg" alt="" />
          <h1 className="text-3xl font-bold my-4">Alice and Bob</h1>
          <p className="text-lg font-medium my-4 text-center mx-5 text-slate-600 italic">"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</p>
        </div>
        <div id="item4" className="carousel-item w-full flex flex-col justify-center items-center mx-10 mb-10">
          <img className="w-72 rounded-full shadow-md my-4" src="https://i.ibb.co/prgkSP0/4.jpg" alt="" />
          <h1 className="text-3xl font-bold my-4">Alice and Bob</h1>
          <p className="text-lg font-medium my-4 text-center mx-5 text-slate-600 italic">"We couldn't be happier with the service provided by 2RING. The user-friendly interface made planning our wedding a breeze."</p>
          
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
