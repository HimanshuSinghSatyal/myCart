import React, {memo} from "react";
import Product from "./Product";

 function ProductList({products}) {

   console.log("productList runing");
   
   return(
     <div className="sm:grid grid-cols-3 gap-1 m-1 p-3 sm:p-hidden mx-auto">
     {products.map(function(item){
       return <Product key={item.id}
                {...item} />
     })}
     </div>
   );
   
 }



export default memo(ProductList);