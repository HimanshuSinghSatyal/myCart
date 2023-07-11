import React,{useContext} from "react";
import {userContext} from "./Context";

function WithUser(Incoming){
  function Outgoing(props){

  const{user, setUser} =useContext(userContext);

  return <Incoming {...props} user={user} setUser={setUser}/>  
    
  }
  return Outgoing;
}

export default WithUser;