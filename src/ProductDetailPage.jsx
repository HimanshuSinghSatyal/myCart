import React,{useState, useEffect, memo} from "react";
import {useParams, Link} from "react-router-dom";
import allData from "./DummyData";
import { HiArrowLeft } from "react-icons/hi";
import {getProductData} from "./Api";
import {HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Loading from "./Loading";
import NotFoundPage from "./NotFoundPage";
import Button from "./Button";
import {WithCart} from "./WithProvidar";


function ProductDetailPage({addToCart}){
const id = +(useParams().id);

console.log("detail page runing");

  const[product, setProduct]=useState();

  const[loading, setLoading]=useState(true);

  const[count, setCount]=useState(1);

useEffect(function(){
const data = getProductData(id);

  data.then(function(product){
  setProduct(product);
  setLoading(false);
  setCount(1);
  })
    .catch(function(error){
  setLoading(false);
 
})  
},[id]);


 function handleCountChange(event){
    setCount(+event.target.value);
 }

  function handleButtonClick(){
    addToCart(id, count);
  }

  function handlePreviewClick(){
    setLoading(true);
  }

  function handleNextClick(){
    setLoading(true);
  }

   if(loading){
     return <Loading/>
   }
  
   if(!product){ 
     return <NotFoundPage/>  
   }
   
return(
  <div className="h-screen overflow-scroll">
<div>
   <Link className="flex items-center text-rose-500 text-xl" to="/"> <HiArrowLeft/>Back
  </Link>
</div>
  
  <div className="flex p-4 bg-blue-200" >
    
    <div className=" w-2/5">
  <img src={product.thumbnail}/> 
    </div>
    
    <div className="p-2">
  <h1> {product.title}</h1>
  <h1 className="text-rose-500"> {product.category}</h1>
  <h1> Rs. {product.price}</h1>

  <div className ="flex">
  <input onChange= {handleCountChange}  value={count} className="border-2 border-rose-400 w-10 rounded-lg p-1" type="number"/>
      
   <Button onClick={handleButtonClick}> Add card</Button>
     </div> 
      
  </div>

  </div>

    <div className="flex justify-between">
      <div>
      {id >1 &&
    <Link onClick= {handlePreviewClick} className="flex items-center text-rose-500 text-xl" to={"/products/"+ (id-1)}> <HiChevronLeft/>Preview </Link>}
      </div>
      
    <div>
    <Link onClick= {handleNextClick} className= "flex items-center text-rose-500 text-xl " to={"/products/"+ (id+1)}> 
       Next<HiChevronRight/> </Link>
    </div>
      
     </div> 
    
   </div>
  );
}

export default WithCart(ProductDetailPage);