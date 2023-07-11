import React,{useState,useEffect} from "react";
import {cartContext} from "../Context";
import {WithUser} from "../WithProvidar";
import {getCart} from "../Api";
import {getProductByIds}  from "../Api";
import {saveCart} from "../Api";

function CartProvidar({isLogIn,user, children}){

const[cart, setCart]=useState([]);
  
 useEffect( 
  function () {
      if (isLogIn) {
        getCart().then(function (savedCart) {
          setCart(savedCart);
        });
      } else {
        const savedDataString = localStorage.getItem("myCart") || "{}";
        const savedData = JSON.parse(savedDataString);
        quantityMapToCart(savedData);
      }
    },
    [isLogIn]
  );

  function quantityMapToCart(quantityMap) {
    getProductByIds(Object.keys(quantityMap)).then(function (products) {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));

      setCart(savedCart);
    });
  }

  function addToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

    const oldCount = quantityMap[productId] || 0;

    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(quantityMap) {
    if (isLogIn) {
      saveCart(quantityMap).then(function (response) {
     quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("myCart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);


  return(
    <div>

<cartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
      
  </div>
  ); 
}

export default WithUser(CartProvidar);