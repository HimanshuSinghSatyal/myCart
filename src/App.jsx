import React,{useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import ProductListPage from "./ProductListPage";
import Footer from './Footer';
import ProductDetailPage from "./ProductDetailPage";
import NotFoundPage from "./NotFoundPage";
import CartPage from "./CartPage";
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import axios from "axios";
import Loading from "./Loading";
import Alert  from "./Alert";
import {alertContext} from "./Context";
import UserProvidar from "./providar/UserProvidar";
import AlertProvidar from "./providar/AlertProvidar";
import CartProvidar from "./providar/CartProvidar";


 

function App() {
    
  return (
    <div className="bg-sky-100 h-screen overflow-scroll flex flex-col">
    
      <div className="grow">

        

      <UserProvidar>
        <CartProvidar>
        <AlertProvidar>  
          
    <Navbar/>
      <Alert/>  
    <Routes>
      <Route index element={ <UserRoute><ProductListPage/> </UserRoute> }/>
      <Route path="/products/:id/" element={<ProductDetailPage/> } />
      <Route path="*" element={<NotFoundPage/>} />
      <Route path= "/Cart" element={<CartPage/>} />
      <Route path="/LogIn" element={<AuthRoute><LogInPage/></AuthRoute>} />
      <Route path="/SignUp" element={<AuthRoute><SignUp/> </AuthRoute> }  />
  
    </Routes>
      <Footer/>
      </AlertProvidar>
          </CartProvidar>
        </UserProvidar>
        
    </div>  
      </div>
  );
}

export default App

