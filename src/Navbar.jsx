import React,{useState} from 'react';
import { GiShoppingCart } from "react-icons/gi";
import {Link} from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import {WithUser} from "./WithProvidar";
import {WithCart} from "./WithProvidar"

function Navbar({cartCount,setUser}){

  const[menuOpener, setMenuOpener]=useState(false);

  function handleMenuOpener(){
    setMenuOpener(!menuOpener);
  }
 
  return(
    
    <div className="bg-blue-200 p-2 mx-xs flex flex-row justify-between border-2 border-gray-300">
     <div className="w-24">
       <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39c-wip3F-tJwgSw3TdJqllZS64K0qnQrmw&usqp=CAU " /> 
     </div>

      <div className= "flex flex-row">
      <Link to="/Cart">
     <div className="flex flex-col items-center">
       
      <GiShoppingCart className="text-rose-500 text-3xl"/>
       
    <h1 className= "-m-11 text-red-500 bg-rose-200 border-1 rounded-full ">{cartCount}</h1>  
     </div>
        
    </Link>
        
    <div className="mx-2">
   <GiHamburgerMenu onClick={handleMenuOpener} className="sm:hidden text-rose-600 text-2xl"/>
      {menuOpener && <MobileMenu setUser={setUser}/> 
      }
      <div className="hidden sm:block">
      <MobileMenu setUser={setUser}/>
        </div>
      
   </div>
        
   </div>
   
    </div>
      
  );
}

export default WithUser(WithCart( Navbar));