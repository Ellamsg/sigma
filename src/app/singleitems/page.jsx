const Singleitems = () => {
  return (
    <div className="flex border-b-2 border-black">
      <div className="h-[650px] w-[100%] border-r-2 border-black bg-white">
        <img className="h-full" src="/images/interlude.png" alt="" />
      </div>

<div className="w-[100%]">


      <div className="  flex p-6 flex-col gap-3">
        <div className="title font-bold">GENESIS</div>
        <div className="header text-2xl font-bold w-[29%] ">GENESIS BLACK 727 5D</div>
        <div className="desc  font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptatum non a qui ducimus, sapiente commodi, necessitatibus
          assumenda exercitationem in modi libero, natus molestiae. Natus
          accusantium repudiandae consectetur at voluptate.
        </div>

        <div>
            <p>COLOR</p>
            <div className="flex gap-3 pt-3">
                <button className="black colors bg-black "></button>
                <button className="red colors bg-mono"></button>
                <button className="yellow colors bg-yellow"></button>
            </div>
        </div>

   <p className="">QUANTITY</p>
        <div className="quantity border-2 border-spacing-3 flex items-center  h-6">
          <button className="w-[20%] h-full text-3xl">-</button>

          <div className="w-[60%] border-r-2 border-l-2  flex items-center justify-center h-full text-center">
            <p className=" ">1</p>
          </div>
          <button className="h-full w-[20%] text-3xl ">+</button>
        </div>

        <button className="add-to-cart">ADD TO CART</button>
        <div className="">
          <button className="h-6 text-white bg-black w-[35%] rounded-[10px]">PAY</button>
        </div>
        <p>jkbfm,gknlkfhng bkm</p>
      </div>
    </div>
    </div>
  );
};

export default Singleitems;
