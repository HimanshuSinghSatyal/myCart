import React,{useState} from "react";
import {alertContext}  from "../Context";


function AlertProvidar({children}){

  const[alert, setAlert] = useState();

  
  function removeAlert(){
    setAlert(undefined)
  }
  
  return(
    <div>
      
  <alertContext.Provider value={{alert, setAlert, removeAlert  }}>{children}
    
  </alertContext.Provider>
  
  </div>  
  );
}

export default AlertProvidar;