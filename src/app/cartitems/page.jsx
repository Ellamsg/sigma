  
  "use client"
  import { CartContext } from "@/context/context";
  import { useContext } from "react";
  import { Context } from "react";
  
  
  const Cartitems = () => {

    
  const { cartItems } = useContext(CartContext);

    return ( 



        <div>


    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  



        </div>
     );
  }
   
  export default Cartitems;