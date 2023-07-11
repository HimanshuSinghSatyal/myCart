import React,{useEffect, useState} from "react";
import {userContext} from "./Context";
import Loading from "./Loading";
import axios from "axios";

function UserProvidar({children}){
  
  const[user, setUser]=useState("")
  const[loading, setLoading]=useState(true);
  
const token =localStorage.getItem("token");
  
  useEffect(()=>{
    if(token){ axios.get("https://myeasykart.codeyogi.io/me",{headers:{
       Authorization:token,
     },                                   },).then((response)=>{
       setUser(response.data);
      setLoading(false);
    }).catch(()=>{
      localStorage.removeItem("token");
      setLoading(false);
    })          
    }
   else{
     setLoading(false);
   }
  },[token] );
  
if(loading){
    return <Loading/>
  }
  
  return(<div>
    <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
  </div> 
  );
}

export default  UserProvidar;