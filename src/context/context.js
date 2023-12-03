"use client";

import { useContext, createContext } from "react";
import { client } from "../../sanity/lib/client";
import { useState, useEffect } from "react";
import React from "react";

export const CartContext = createContext();

export function ContextProvider({ children }) {
  const [posts, setAllPosts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
 
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && (category == "womens collection" || category == "mens collection")] {
          title,
          overview,
          slug,
          price,
          category,
          _createdAt,
          poster {
            asset -> {
              _id,
              url
            },
            alt
          } 
          
        }`
      )
      .then((data) => {
        console.log("API Response:", data);
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);



 

  //add items to cart, make a new(newItems) from the old array(prevItems, ...prev) taking all the items inside and create a new one.
  function addToCart(newItem) {
    //Take all the items that are currently in the shopping cart (prevItems), spread them out [...prevItems], and then add the new item (newItem) to
    // the end of the new array." Essentially, it's a way to create a new array with all the existing items plus the new item.
    setCartItems((prevItems) => [...prevItems, newItem]);

  }

  console.log(cartItems);

  //remove items from cart
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }


  return (
    <CartContext.Provider
      value={{
        removeFromCart,
        addToCart,
        cartItems,
        posts,
     

      }}
    >
      {children}
    </CartContext.Provider>
  );
}
