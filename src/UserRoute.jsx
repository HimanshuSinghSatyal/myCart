import React,{useContext} from "react";
import {Navigate} from "react-router-dom";
import WithUser  from "./WithUser";

function UserRoute({user,children}){
  
 if(!user){
   return <Navigate to= "/LogIn"/>
 }

  return children;
  
}

export default WithUser(UserRoute);