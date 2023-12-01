"use client"

import {  useContext,createContext } from "react";
 import { client } from "../../sanity/lib/client";
import { useState,useEffect } from "react";
import React from "react";







export const CartContext = createContext();


 export function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
  
   
    useEffect(() => {
      client
        .fetch(
          `*[_type == "post"] {
          title,
          overview,
          slug,
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
        .then((data) => setAllPhotos(data))
        .catch(console.error)
    }, [])



//add items to cart
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }
  console.log(cartItems)

  

//remove items to cart
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }


  return (
    <CartContext.Provider
      value={{
     
        removeFromCart,
        addToCart, cartItems
       
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
  