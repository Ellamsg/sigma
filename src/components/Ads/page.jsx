const Ads = () => {
  return (
    <div>
    <div className="flex  lg:flex-row flex-col lg:h-[100vh]  justify-center border-t-2 border-black">
      <div className="w-[100%] flex justify-center items-center ">
        <div className="flex flex-col my-7 lg:my-0  w-[85%]  lg:w-[45%] justify-items-center justify-center">
          <div className=" ">
            <p
              className="lg:text-3xl text-2xl  leading-tight
             font-semibold "
            >
              BREAK THROUGH THE WALL OF DULLNESS @2023
            </p>
          </div>
        
          <div className="text-[19px]">
            <div className="flex gap-7  ">
              <p>PREMIUM</p>
              <p> ACUTE FRAMES</p>
            </div>

            <div className="">
              <p>PREMIUM     <span className="p-5">| </span>   ACUTE FRAMES</p>
            </div>
            <div className="">
            <p>PREMIUM     <span className="p-5">| </span>   ACUTE FRAMES</p>
            </div>
          </div>
        </div>
      </div>



      <div className="w-[100%] border-black lg:border-t-0 border-t-2  lg:border-l-2">
        <img  className=" h-[100%] object-cover w-full " src="/images/alex.jpeg" />
      </div>
      
    </div>
   
    </div>
  );
};

export default Ads;
