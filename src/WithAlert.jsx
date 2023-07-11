import React,{useContext} from "react";
import {alertContext} from "./Context";

function WithAlert(Incoming){
  function Outgoing(props){

    const{alert, setAlert, removeAlert}= useContext(alertContext);

    return <Incoming {...props} alert={alert} setAlert= {setAlert}
   removeAlert={ removeAlert}          />

  }

  return Outgoing;
}

export default WithAlert;