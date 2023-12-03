"use client";
import { CartContext } from "@/context/context";
import { useContext } from "react";
import { Context } from "react";
import { useEffect } from "react";

const Cartitems = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-6">
      <div>
        <p className="text-3xl font-semibold">Cart</p>
        <p className=" w-[140px] border-b-2 border-black">continue shopping</p>

        

      <div className="flex flex-col   ">

      
          {cartItems.map((item) => (
            <div key={item._id}>
            <div className="flex pt-6 justify-between ">
          <div className="flex gap-4">
            <div className="border-black border-2 ">
              <img className="h-[200px] w-[200px]" src={item.poster.asset.url} />
            </div>

            <div>
              <p className="font-bold ">{item.title}</p>
              <p className="text-[15px]">min short</p>
              <p className="text-[12px] pt-4">765SDC</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div>
              <button>+</button>
            </div>

            <p>1</p>
            <div>
              <button>-</button>
            </div>
          </div>

          <div className="">
            <p>REMOVE</p>
          </div>
        </div>
            </div>
          ))}
          </div>
        
      </div>
<div className=" flex flex-col justify-end items-end ">


      <div className="!w-[400px] ">
        <div>
          <div className="flex justify-between py-2">
            <div>
              <p className="font-bold">TOTAL</p>
            </div>

            <div className=" text-end">
              <p className="font-bold">1450 AED</p>
              <p className="text-[12px]">
                lorem ipsom manu eva saint nava say larel
              </p>
            </div>
          </div>

          <button className="add-to-cart ">CHECKOUT</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cartitems;
