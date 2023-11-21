import Ads from "@/components/Ads/page";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-[50%] flex relative justify-center  bg-[white]">
          <img className="lg:h-[610px]  " src="/images/interlude.png" />

          <div className="absolute bottom-2 left-4 bg-red-700">
            <p>DISCOVER THE NEW </p>
            <p className="text-[22px] font-bold"> ORIGIN COLLECTION</p>
            <button className="text-[12px] banner-btn">DISCOVER NOW</button>
          </div>
        </div>

        <div className="w-[50%] border-l-2 relative border-black flex justify-center bg-[#e9e7e7] items-center ">
          <img className="lg:h-[410px]" src="/images/all.png" />
          <div className="absolute bottom-2 left-4 bg-red-700">
            <p>DISCOVER THE NEW </p>
            <p className="text-[22px] font-bold"> ORIGIN COLLECTION</p>
            <button className="text-[12px] banner-btn">DISCOVER NOW</button>
          </div>
        </div>

      </div>
      <div className="font-semibold ">
        <div className="pl-4 py-3">
          <p>FREQUENTLY ASKED QUESTION</p>
        </div>

        <div className="flex lg:flex-row lg:h-[150px] w-full flex-col  border-t-2 border-black">
          <div className="border-black w-[100%] border-r-2 py-3  pl-4 ">
            <p>What are your shipping costs?</p>
          </div>
          <div className="border-black border-r-2 w-[100%] py-3 pl-4">
            <p>What are your shipping costs?</p>
          </div>
          <div className="border-black w-[100%] border-r-2 py-3 pl-4">
            <p>What are your shipping costs?</p>
          </div>
        </div>
      </div>

    

      <div className="relative">
        <img className="w-full" src="/images/woman-coat.png" />
        <div className=" absolute  flex justify-center left-0 right-0 items-center text-center  m-aut0 top-0 bottom-0 ">
        <p className="text-6xl font-bold text-white ">KING SIGMA</p>
        </div>
     

      </div>
      <Ads />
      <div className="text-center p-3 border-t-2 border-b-2 border-black font-semibold">
        <p>BACK TO TOP</p>
      </div>
    </div>
  );
};

export default Homepage;
