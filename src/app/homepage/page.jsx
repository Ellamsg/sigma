"use client";
import { useContext } from "react";
import Ads from "@/components/Ads/page";

import { client } from "../../../sanity/lib/client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { CartContext } from "@/context/context";
const Homepage = () => {
  let { addToCart } = useContext(CartContext);
  let { posts } = useContext(CartContext);

  function handleClick(post) {
    console.log(post);
    addToCart(post);
  }


  return (
    <div className="">
      <div className="flex border-b-2 border-black ">
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
        <img
          className="lg:w-full object-cover lg:h-auto h-[500px]"
          src="/images/woman-coat.png"
        />
        <div className=" absolute  flex justify-center left-0 right-0 items-center text-center  m-aut0 top-0 bottom-0 ">
          <p className="lg:text-6xl text-4xl font-bold text-white ">
            KING SIGMA
          </p>
        </div>
      </div>
      <div className="flex logos justify-between">
        <img src="/images/gogs.svg" alt="" />
        <img src="/images/forbes.svg" alt="" />
        <img src="/images/infra.svg" alt="" />
        <img src="/images/etsy-logo-svgrepo-com.svg" alt="" />
        <img src="/images/sass.svg" alt="" />
      </div>


      <div className="border-t-2  border-black py-3 px-6">
        <p>NEW ARRIVAL</p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4  ">
        {posts.map((post) => (
          <div className="border-[1px] bg-red border-black" key={post._id}>
            
            <div className=" relative h-[100%]">
              <p className="absolute top-0">{post.title}</p>
              <Link href={`/itemdetails/${post.slug.current}`}>
                <img
                  className="h-[470px] w-[100%]"
                  src={post.poster.asset.url}
                  alt="user-img"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Ads />
      <div className="text-center p-3 border-t-2 border-b-2 border-black font-semibold">
        <p>BACK TO TOP</p>
      </div>
    </div>
  );
};

export default Homepage;
