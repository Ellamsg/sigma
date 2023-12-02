"use client";

import { client } from "../../../../sanity/lib/client";
import { useParams } from "next/navigation";
import { urlForImage } from "../../../../sanity/lib/image";
import { useState, useEffect } from "react";
import { ContextProvider } from "@/context/context";
import { CartContext } from "@/context/context";
import { useContext } from "react";

const Singleitems = () => {
  const [singleposts, setSinglePosts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  

  let { cartItems } = useContext(CartContext);
  let { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]
            {
                title,
                content,
                overview,
                _createdAt,
               poster {
                  asset -> {
                    _id,
                    url
                  },
                  alt
                }
              }
            `;
      const fetchedData = await client.fetch(query);
      setSinglePosts(fetchedData);
      setIsLoading(false);
    }

    fetchData();
  }, [slug]);

  function handleClick(singleposts) {
    console.log(singleposts);
    addToCart(singleposts);
  }

  return (
    <div className="flex  h-[120vh]   border-b-2 border-black">
      <div className="w-[100%] w border-r-2 border-black ">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className=" w-[100%] h-[100%] ">
            {/*check if data exist render or else no image */}
            {singleposts.poster && singleposts.poster.asset ? (
              <img
                className="h-[100%] w-[100%]"
                src={singleposts.poster.asset.url}
              />
            ) : (
              <p>No image available</p>
            )}{" "}
          </div>
        )}
      </div>

      <div className="w-[100%] ">
        <div className="  flex p-6 flex-col gap-3">
          <div className="title font-bold">{singleposts.title}</div>
          <div className="header text-[19px] font-bold w-[29%] ">
            GENESIS BLACK 727 5D
          </div>
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
          <div className="quantity border-2 border-spacing-3 flex items-center  h-[48px]">
            <button className="w-[20%] h-full text-3xl">-</button>

            <div className="w-[60%] border-r-2 border-l-2  flex items-center justify-center h-full text-center">
              <p className=" ">1</p>
            </div>
            <button className="h-full w-[20%] text-3xl ">+</button>
          </div>

          <button
            onClick={() => handleClick(singleposts)}
            className="add-to-cart"
          >
            ADD TO CART
          </button>
          <div className="">
            <button className="h-[48px] text-white bg-black w-[35%] rounded-[10px]">
              PAY
            </button>
          </div>
          <p>jkbfm,gknlkfhng bkm</p>
          <div>
            <p className="font-bold text-2xl">SPECIFICATIONS</p>

            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum
              facere sint iure facilis sapiente, soluta ut, qui eaque, harum id
              accusantium unde. Perferendis, doloribus? Cumque sunt illo
              quisquam perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleitems;
