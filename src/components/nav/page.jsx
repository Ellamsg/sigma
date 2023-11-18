import Link from "next/link";

const Nav = () => {
  return (
    <div className="text-center">
      <div className="bg-black text-[12px] justify-between flex text-white p-4">
        <div className="banner ">
          <p>FRESS SHIPPING WORLDWIDE BY DHL</p>
          <p>|</p>
          <p>FRESS SHIPPING WORLDWIDE </p>
        </div>

        <div className="banner">
          <p>FRESS SHIPPING WORLDWIDE BY DHL</p>
          <p>|</p>
          <p>FRESS SHIPPING WORLDWIDE </p>
        </div>

        <div className="banner">
          <p>FRESS SHIPPING WORLDWIDE BY DHL</p>
          <p>|</p>
          <p>FRESS SHIPPING WORLDWIDE </p>
        </div>

        <div>
          <p>FRESS WORLDWIDE </p>
        </div>
      </div>

      <div className="border-black flex justify-between border-2">

        <div className="border-red-500 flex ">
          <p className="px-5 py-3">KING SIGMA</p>
          <p className="border-l border-r px-5 py-3 border-black">SHOP</p>
        </div>

  
        <div className="border-red-500 flex ">
        <p className="border-l px-5 py-3  border-black">SHOP</p>
        <p className="border-l px-5 py-3 border-black">SHOP</p>
        <p className="border-l px-5 py-3 border-black">SHOP</p>
          <p className="border-l px-5 py-3 border-black">SHOP</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
