import React from 'react';
import {Link} from 'react-router-dom';

function Product({ thumbnail, title, category, price, id}){
 return (
   
   <div className= "m-2 border-inherit border-2 p-1 mx-w-xs">
    <div className= "w-full aspect-square">
    <img className="w-full h-full" src = {thumbnail}/>
    </div>
     
    <div>{category}</div>
    <div className="text-xl">{title}</div>
     <div className="text-xl">Rs.{price}</div>
   <Link className="text-red-500" to={"/products/" + id}>view details </Link>
   
   </div>
     
 );
  
}
export default Product;