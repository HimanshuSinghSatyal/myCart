// git remote add origin https://github.com/HimanshuSinghSatyal/mycrat.git
//git branch -M main
//git push -u origin maiimport React,{useEffect} from "react";
import {IoMdCheckbox } from "react-icons/io";
import  {CgDanger} from "react-icons/cg";
import {alertContext} from "./Context";
import {WithAlert} from "./WithProvidar";


const themeMap ={
  success: {color: " bg-green-300 text-rose-500",
    Icon: IoMdCheckbox},
  error: {color:" bg-red-400 text-white",
    Icon: CgDanger,}
}

function Alert({alert, setAlert, removeAlert }){

  useEffect(function(){
   if(alert){
    const timeout =  setTimeout(removeAlert, 3 * 1000);

     return function(){
       clearTimeout(timeout);
     }
   } 
  },
   [alert]);
  
  if (!alert) {
    return <></>;
  };
  
  console.log("alert", alert);

  const{message, type} = alert;

 const{color, Icon}=themeMap[type];
  
  
  
  return(
    <div className= "flex w-full">
      
    <div className= {"flex p-2 rounded-lg m-auto" + color}>
     
      
      <p className= " m-2"> <Icon/></p>

      <p> {message}</p>

      <button onClick= {removeAlert} className="mx-7"> dismiss</button>
  
    </div>
      
    </div>
  
  );
}
        

export default WithAlert(Alert);