import React from "react";
import Input from "./Input";
import Button from "./Button";
import * as Yup  from "yup";
import  {withFormik} from "formik";
import axios from "axios";
import {userContext, alertContext} from "./Context";
import {WithUser, WithAlert}from "./WithProvidar";

function callapi(values, bag){
  console.log("values",values)
 axios.post("https://myeasykart.codeyogi.io/signup",{ 
    fullName:values.fullName,
   email: values.email,
   password: values.password,
 }).then((response)=>{
   const{user, token}=response.data;
   localStorage.setItem("token",token);
   bag.props.setUser(user);
 }).catch(()=>{
   bag.props.setAlert({type: "error", message:"opps somthing worng"});
 })
}



 const schema = Yup.object().shape({
     fullName: Yup.string().required(),
   
   email: Yup.string().email().required(),
   
   password: Yup.string().required(),
   }
 );

const initialValue={
  fullName:"",
  email: "",
  password: "",
  
}



 export function SignUp({
   handleSubmit, 
   values,
   handleChange, 
   touched, 
   errors, 
   handleBlur
 }) {
  
  return(
     <div className="p-2">
       <form onSubmit={handleSubmit}>
    <Input 
      onChange={handleChange}
      onBlur={handleBlur}
      values={values.fullName}
      errors={errors.fullName}
      touched={touched.fullName}
     placeholder="fullName"
     label= "fullName"
      id="fullName"
      name="fullName"
      
      />

    <Input
      placeholder="Email"
      label="email"
      id="email"
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      values={values.email}
      errors={errors.email}
      touched={touched.email}
      />

    <Input 
      placeholder="password"
      label="password"
      id="password"
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      values={values.password}
      errors={errors.password}
      touched={touched.password}
      
      />

   <Button type="submit" className="p-3 m-2"> sign Up</Button>

    </form>
       
    </div>

    
  );
}

const Hoc= withFormik({ initialValues : initialValue,
 handleSubmit : callapi,
 validationSchema: schema,
  })
 
export default WithAlert(WithUser(Hoc(SignUp)));