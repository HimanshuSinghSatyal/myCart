import React,{useState, useEffect} from "react";
import { ImCross } from "react-icons/im";


  function CartRow({ product, quantity, onQuantityChange, onRemove }) {
    
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
  }

  
  return(
    <div>
      
    <div className="flex flex-col border-2 border-y-inherit m-4 sm:hidden">
      
    <ImCross onClick={handleCrossClick} className="text-red-500 m-3"/>
    
      
    <div className="w-20  self-center p-2 ">
      
   <img src= {product.thumbnail}/>
    
    </div>

   <div className ="flex justify-between p-2  border-2 border-inherit">
   <h1> Product:</h1>
   <p className="text-rose-500">{product.title}</p>
   </div>  

    <div className="flex justify-between p-2  border-2 border-inherit ">
   <p> Price:</p>   
   <p>{product.price} </p>
     </div>
      
      <div className="flex justify-between p-2  border-2 border-inherit ">
   <p> Quantity: </p> 

<input
          type="number"
          className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
          value={quantity}
          onChange={handleChange}
        />
       </div> 
      
      <div className="flex justify-between p-2  border-2 border-inherit ">
   <p> Subtotal:</p> 
   <p> Rs.{product.price * quantity}</p>
      </div>
    
  </div> 

      <div className="hidden sm:block sm:flex justify-between p--2 border-4 border-inherit m-5 bg-white h-15 ">
        <div className=" flex flex-row justify-between w-1/2">
        
    <ImCross  onClick={handleCrossClick} className="text-red-500 m-3"/>
      
      <div className= "w-20">
        <img className="w-20 h-10" src= {product.thumbnail}/> </div>
    <p className="w-2/5"> {product.title}</p>
        </div>
          <input
          type="number"
          className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
          value={quantity}
          onChange={handleChange}
        />
        
        <p className= "w-1/6"> {product.price}</p>
                              
    <p className= "w-8 h-5 bg-blue-100  p-1 border-2 border-inherit " 
  > Rs.{product.price * quantity}</p> 

</div>
    </div>
     );
   }

export default CartRow;