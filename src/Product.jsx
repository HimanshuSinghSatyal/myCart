import React, {memo} from "react";
import {Link} from "react-router-dom";

function Product({title, thumbnail, category, price, id }){
  
 return(
<div className="max-w-xs m-2 bg-blue-100 p-1">
  <div className="w-full aspeqt-square">
  <img src={thumbnail} />
  </div>
  <h1>{title}</h1>
  <h1>{category}</h1>
  <h1>Rs.{price} </h1>

  <Link className="text-rose-400" to= {"/products/"+ id} >view detail</Link>

</div> 
 );
}

export default memo(Product);