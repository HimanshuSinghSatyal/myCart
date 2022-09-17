import React from  "react";
import {ImSpinner3} from "react-icons/im"

function Loading() {
  return <div className="grow text-red-500 text-6xl bg-gray-300 flex items-center justify-center "> < ImSpinner3 className="animate-spin"/></div>
  
}
 export default Loading ;