import React from "react"
import {useField} from "formik";

function ForMikHoc(Incoming) {
function Outgoing({name, ...rest}){

  const field =useField(name);

  const[data, meta]= field;
  console.log(field);

  const{onChange, onBlur, value}= data;
  const{error, touched}=meta;
  
  return(
    <div>  
            <Incoming
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value= {value}
              {...rest}   
            /> 
      
          </div>
    
  );
}
  return Outgoing;
}

export default ForMikHoc;
