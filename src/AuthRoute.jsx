import React,{useContext} from "react";
import {Navigate} from "react-router-dom";
import WithUser from "./WithUser";



const AuthRoute = ({ user, children})=>{

  if(user){
    return <Navigate to="/" />
  }
  return children;
  
}

export default WithUser(AuthRoute);
  