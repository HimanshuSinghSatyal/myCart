import React, {useState} from 'react';
import ProductListPage from './ProductListPage';
import Navbar from './Navbar';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from "./NotFound";

function App() {

  const dataString = localStorage.getItem("my-cart") ||"{}";
  
const saveData = JSON.parse(dataString);
  
  const [cart, setCart] = useState(saveData);
   
function hendleAddToCard(productId, count) {
const oldcount= cart[productId] || 0;
  const newCart= ({ ...cart, [productId] : oldcount + count});
  setCart (newCart);
  
 const cartString = JSON.stringify(newCart);

  localStorage.setItem("my-cart",cartString);
};
 const totalCount= Object.keys(cart).reduce(function(privious, current) {
   return  privious + cart[current]
  },0);
  
    return (
  <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
     <Navbar productCount={totalCount }/>
    
     <Routes>
      <Route index element={ <ProductListPage/>} />
      <Route path ="/products/:id/" element={<ProductDetails onAddToCard={hendleAddToCard}/>} />   
       <Route path="*" element={<NotFound/>} /> 
  </Routes>
    
      <Footer/>
        </div>
   
  );
}
export default App;