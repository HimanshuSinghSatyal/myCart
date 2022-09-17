import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getProductData } from './api';
import Loading from './Loading';

function ProductDetails({ onAddToCard }) {
	const id = +useParams().id;
	const [product, setProduct] = useState();

     const[count, setcount]= useState(1);
  
	useEffect(
		function() {
			const p = getProductData(id);
			p.then(function(product) {
				setProduct(product);
        setcount(1);
			});
		},
		[id]
	);
  function hendleInputChange(event){   setcount(+event.target.value);
  } 

  function hendleButtonChange(){
    onAddToCard(id, count);
  }

	if (!product) {
		return <Loading />;
	}

	return (
		<div className=" m-5 h-screen ">
			<div>
				<Link className="flex items-cenrter" to="/">
					<HiArrowLeft className="text-3xl text-red-500" /> Back
				</Link>
			</div>
      <div className="drop-shadow-2xl p-4 flex flex-col justify-center items-center">
			<div>
				{' '}
				<img src={product.thumbnail} />{' '}
			</div>
			<div> {product.category}</div>
			<div className="text-3xl"> {product.title} </div>
			<div> {product.brand}</div>
			<div> {product.description}</div>
			<div> Rs. {product.price}</div>
<div className="flex">
			<input value={count}  onChange={hendleInputChange}  type="number"className="border border-gray-700 w-12 p-2"/>
			<button  onClick={hendleButtonChange} className="bg-sky-500 p-2 text-white rounded-lg ml-2" >Add to card</button>
</div>
      </div>
			<div className="flex flex-wrap flex justify-between">
				<div>
 {id > 1 && (
      <Link className="flex items-center" to={'/products/' + (id - 1)}>
   
			<HiArrowLeft className="text-3xl text-red-500" /> previous
					</Link>)}
				</div>
   <div>
	<Link className="flex items-center" to={'/products/' + (id + 1)}>
    <HiArrowRight className="text-3xl text-red-500" /> Next			</Link>
				
			</div>
		</div>
             </div>
	);
}

export default ProductDetails;
