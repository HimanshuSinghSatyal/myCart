import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import Loading from './Loading';
import NotFound from './NotFound';

function ProductListPage() {
  const [productList, setProductList] = useState([]);

  const [loading, setLoading]= useState(true);

  const [query, setQuery] = useState("");

  const [sort, setsort] = useState("default");



  useEffect(function() {
    const xyz = getProductList();
    xyz.then(function(products) {
      setProductList(products);
    
      setLoading(false);
    });
    ;

  }, []);



  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;

  });

  if (sort == "high") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == "title") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });

  } else if (sort == "low") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  }
  function hendleChange(event) {
    setQuery(event.target.value);
  }

  function hendleSortChange(event) {
    setsort(event.target.value);


  }
  
    
  
  if (loading){
    return <Loading/>
    
    
  }
  return (
    <div>
      <div className="m-2 flex justify-between">
      <div className="border-2 border-inherit ">

        <input type="text" placeholder="search"
          onChange={hendleChange} />
      </div>


      <div>
        <select onChange={hendleSortChange} value={sort}>

          <option value="default"> Default Sort</option>
          <option value="title"> Sort by title</option>
          <option value="high"> Sort by price: low to high</option>
          <option value="low"> Sort by price: high to low</option>

        </select>

      </div>
        </div>
      {data.length > 0 &&
        <ProductList products={data} />}

      {data.length == 0 && <div className="text-red-500 text-4xl bg-gray-400 text-center bg-gray-100 h-screen"> {<NotFound/>} </div>}
    </div>

  );

}
export default ProductListPage;