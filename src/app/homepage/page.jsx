const Homepage = () => {
  return (
    <div className="">

      <div className="flex">
        <div className="w-[50%] flex justify-center  bg-[white]">
          <img className="lg:h-[610px]  " src="/images/interlude.png" />
        </div>
        <div className="w-[50%] border-l-2 border-black flex justify-center bg-[#e9e7e7] items-center ">
          <img className="lg:h-[410px]" src="/images/all.png" />
        </div>
      </div>
<div className="font-semibold">

<div>
    <p>FREQUENTLY ASKED QUESTION</p>
</div>

<div className="flex justify-between border-t-2 border-black">
    <div>What are your shipping costs?</div>
    <div className="border-black border-l-2">What are your shipping costs?</div>
    <div className="border-black border-l-2">What are your shipping costs?</div>
</div>


</div>

    </div>
  );
};

export default Homepage;
