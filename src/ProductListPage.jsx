import React,{useState, useEffect, useMemo} from "react";
import ProductList from "./ProductList";
import allData from "./DummyData";
import NoMatching from "./NoMatching";
import {getProductList} from "./Api";
import Loading from "./Loading";
import {range} from  "lodash";
import {Link, useSearchParams}  from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function ProductListPage(){

  const [searchParams, setSearchParams] = useSearchParams();

  const Params = Object.fromEntries(  [...searchParams])

  let{ query, sort, page} = Params;

  query = query || "";
  sort = sort || "Default";
  page = +page || 1 ;

//const[query, setQuery]=useState("");

  // const[sort, setSort]=useState('Default');

  const[productData, setProductData]=useState("");

  const[loading, setLoading]=useState(true);



  useEffect(function(){

    let sortBy;
    let sortType;

    if(sort== "title"){
      sortBy= "title"
    }else if(sort == "lowPrice"){
      sortBy = "price"
    }else if(sort == "highPrice"){
      sortBy = "price"
      sortType ="desc"
    }
  getProductList( sortBy, query, page, sortType).then(function (body){
    setProductData(body);
    setLoading(false);
    });
    
  },[query, sort, page]);
  
  
  
  
  function handleQueryChange(event){
   setSearchParams({...Params,
  query: event.target.value, page:1} ,{replace: false});
  }

  function handleSortChange(event){
    setSearchParams({...Params, sort: event.target.value},
  {replace: false}
  );
  }

  const handleChangeNext = ()=>{
    setSearchParams({page: page +1}) 
  }

  const handlePriviewClick = ()=>{
    setSearchParams({page: page -1})
  }

  if(loading){
    return <Loading/>
  }
    
  return (
    <div>

    <div className="flex flex justify-between my-3">  
    <input onChange={handleQueryChange} className="border-2 border-rose-500 rounded-lg mx-3 mt-3 w-40 h-8 bg-rose-200 text-black" placeholder= "search" 
  value={query}/>  

      <select onChange={handleSortChange} className="bg-rose-300 text-white border-2 border-rose-500 rounded-lg w-32 h-8 m-3" value= {sort}>
      <option value="Default">Sort Default</option>
      <option value="title">Sort By title</option>
      <option value="highPrice">Price:High to Low</option>
      <option value="lowPrice">price:Low to high </option>
      </select>
      </div>
      
 {productData.data.length > 0 && <ProductList products={productData.data}/>}
  {productData.data.length == 0 && <NoMatching/>}

      
<div className="flex">
    { page > 1 && <IoIosArrowBack className="text-red-500 text-4xl" onClick= {handlePriviewClick} />}
     {range(1,productData.meta.last_page +1).map((item)=> (<Link className={"text-gray-700 m-1 p-2 " + (item == page ? " bg-rose-500" : " bg-gray-400" ) }  key={item} to={"?" + new URLSearchParams({...Params,page:item})} onClick={ ()=>(item)}>{item}</Link>)) }

{ page < productData.meta.last_page && <IoIosArrowForward className="text-red-500 text-4xl" onClick= {handleChangeNext} />}

  </div>
    </div>
    
  );
}

export default ProductListPage;
