"use client"

 import { client } from "../../sanity/lib/client";

import react from "react";


function ContextProvider({ children }) {
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

  console.log(cartItems);

//remove items to cart
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  console.log(cartItems);
  return (
    <Context.Provider
      value={{
     
        removeFromCart,
        addToCart,
       
      }}
    >
      {children}
    </Context.Provider>
  );
}
  export { ContextProvider, Context };