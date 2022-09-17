import React from 'react';
import {FaShoppingCart} from "react-icons/fa";

function Navbar({productCount}) {
  return(
       <div className="bg-gray- 400 p-2">
   
     <div className=" mx-w-6xl flex justify-between">
     <img className="h-16" src= "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
     
   <div className="flex flex-col items-center">    
<FaShoppingCart className="text-rose-500 text-xl"/>
     <span> {productCount}</span>
      </div> 
      </div>
      </div>
    
  );
  
}
export default Navbar;