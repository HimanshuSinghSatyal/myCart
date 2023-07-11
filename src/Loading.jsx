import React from "react";
import { ImSpinner3 } from "react-icons/im";

function Loading(){
  
  return(
    <div className="h-screen flex  justify-center items-center">
    <ImSpinner3 className="animate-spin text-6xl text-rose-500"/>
    </div>
  );
}

export default Loading;