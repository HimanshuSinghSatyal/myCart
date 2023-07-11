import React,{useContext} from "react";
import {userContext, alertContext,cartContext} from "./Context";

const WithProvidar = (providar)=>
(Incoming)=> (props)=>{
     const context = useContext(providar)
    return <Incoming {...props} {...context}/>
}


 export default WithProvidar;

export const WithAlert = WithProvidar(alertContext);

export const WithUser =WithProvidar(userContext);

export const WithCart = WithProvidar(cartContext);