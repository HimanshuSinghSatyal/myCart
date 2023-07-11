import React,{memo} from "react";

function Button({children, onClick, type, className, ...rest}){
  return(
    <div>
    <button 
     onClick= {onClick}
      type={type}
      {...rest}
      className= {" text-white bg-red-500 px-7 py-2 border-2 rounded-lg " + className} >
      {children}
  
      </button>
    </div>
  );
}
export default memo(Button);