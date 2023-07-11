import React,{useState,useEffect} from "react";
import CartRow from "./CartRow";
import {WithCart} from "./WithProvidar";
import Button from "./Button";
import Loading from "./Loading";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState({});

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
  

  console.log("cart", quantityMap, 
         "cartToQuantityMap",  cartToQuantityMap() )

  useEffect(
    function () {   setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleQuanityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handeUpdateCartClick() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }
   
   return(
     <div>
       <div className="hidden sm:block sm:flex flex-row justify-between m-5 p-2"> 
       <p className="w-1/2 flex self-center"> Product</p>
        <p className= "w-1/6"> Price</p>
         <p>Quentity</p>
         <p> SubTotal</p>
       </div>
       {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          product={cartItem.product}
          quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
          onQuantityChange={handleQuanityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="flex justify-end px-4 py-2">
        <Button onClick={handeUpdateCartClick}>Update Cart</Button>
      </div>

       
    
     </div>
   );
   
 }



export default WithCart(CartList);


