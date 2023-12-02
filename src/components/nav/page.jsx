
"use client"
import Link from "next/link";

import { useContext } from "react";
import { Context } from "react";
import { ContextProvider } from "@/context/context";
import { CartContext } from "@/context/context";



const Nav = () => {

  const {cartItems}  = useContext(CartContext)

   const numberOfCart = cartItems.length

  return (
    <div className="text-center  sticky top-0 z-[999]  w-[100%]">
      <div className="bg-black overflow-y-auto text-[12px] justify-between flex text-white p-3">
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

      <div className="border-black bg-white flex justify-between border-2">

        <div className="border-red-500 flex ">
         <Link href="/cartitems"><p className="px-5 py-2">KING SIGMA</p></Link> 
          <p className="border-l border-r px-5 py-2 border-black">SHOP</p>
        </div>

  
        <div className="border-red-500 flex ">
        <Link href="/about"><p className="border-l px-5 py-2  border-black">SHOP</p></Link>
        <Link href="/"><p className="border-l px-5 py-2  border-black">SHOP</p></Link>
        <Link href="/singleitems"><p className="border-l px-5 py-2  border-black">SHOP</p></Link>
        <Link href="/cartitems"><p className="border-l px-5 py-2 border-black">CART {numberOfCart}  </p></Link>  
        </div>
      </div>
    </div>
  );
};

export default Nav;
