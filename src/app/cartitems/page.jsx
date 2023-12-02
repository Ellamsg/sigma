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
        <p className="text-3xl font-bold">Cart</p>
        <p></p>

        <div className="flex justify-between py-6">
          <div className="flex gap-4">
            <div className="border-black border-2 ">
              <img className="h-[200px] w-[200px]" src="/images/alex.jpeg" />
            </div>

            <div>
              <p className="font-bold ">GENESIS BLACK</p>
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
            <p>x</p>
          </div>
        </div>

        {/** 
          {cartItems.map((item) => (
            <div key={item._id}>
              <p>{item.title}</p>
              <img className="h-100px w-[100px]" src={item.poster.asset.url} />
            </div>
          ))}
        */}
      </div>
    </div>
  );
};

export default Cartitems;
