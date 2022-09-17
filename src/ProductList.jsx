import React from 'react';
import Product from './Product';



function ProductList({ products }) {
  return (
    <div className="sm:grid grid-cols-3 gap-2">
      {products.map(function(item) {
        return <Product key={item.id} {...item} />
      })}
    </div>

  );
}





export default ProductList;