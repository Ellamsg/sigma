"use client"

import react from "react";


function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
  
    const url = `https://fakestoreapi.com/products?limit=6`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAllPhotos(data));
    }, []);


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