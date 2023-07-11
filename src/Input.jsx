import React,{memo} from "react";
import ForMikHoc from "./FormikHoc";


function Input({name, id, label, className,touched, errors, ...rest}){

  return(
    <div>  
            <label htmlFor={id} className="sr-only">{label}</label>
            <input 
              name={name}
              id={id}
              {...rest}
              className={"p-2 m-2 border-inherit border-2  " + className}
              
            /> 
            { touched && errors && <div className="text-red-500">{errors}</div>}
      
          </div>
      

  );
}

export const ForMikInput=ForMikHoc(Input);

export default memo(Input);