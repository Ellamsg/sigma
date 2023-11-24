const Ads = () => {
  return (
    <div>
    <div className="flex lg:flex-row flex-col lg:h-[100vh]  justify-center border-t-2 border-black">
      <div className="w-[100%] flex justify-center items-center ">
        <div className=" flex flex-col w-[45%] justify-items-center justify-center">
          <div className="">
            <p
              className="text-3xl  leading-tight
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

      <div className="w-[100%] border-black border-l-2">
        <img  className=" h-[100%] " src="/images/alex.jpeg" />
      </div>
      
    </div>
   
    </div>
  );
};

export default Ads;
