import React from "react";
import {withFormik} from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import {Navigate,Link} from "react-router-dom";
import {userContext, alertContext} from "./Context";
import {WithAlert, WithUser}from "./WithProvidar";

function callapi(values, bag){
axios.post("https://myeasykart.codeyogi.io/login",{
   email: values.email, password: values.password,
 }).then((response)=>{
   const{user, token}=response.data;
   localStorage.setItem("token",token);
   bag.props.setUser(user);
 }).catch(()=>{
   bag.props.setAlert({type:"error", message:"somting woring"})
 })
}

const schema= Yup.object().shape({
  
    email:Yup.string().email().required(),
  
password: Yup.string().min(4).required(),
  })
  
     const initialvalues = {
      email:"",
      password:"",
    }

  export function LogInPage({handleSubmit, values, handleChange, touched, errors, handleBlur}){

  
  
  return(
  
    <div className="grow m-2 p-2 border-2 p-4 border-inherit">
        
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl m-2"> Login</h1>
      
            <p className= "text-blue-500 m-2">email address </p>
            <Input
             label= "email"
             id = "email"
             name="email"
             type="email"
             id="email"
             placeholder="Enter Email"
              onChange={handleChange}
              values= {values.email}
              touched={touched.email}
             errors={errors.email}
              onBlur={handleBlur}   
            />
    
            <p className= "text-blue-500 m-2 ">Password </p>
            <Input
              label="password"
              name="password"
              type="password"
              id="password"
              placeholder=" Enter password"
              values= {values.password}
              onChange= {handleChange}
              touched= {touched.password}
              errors= {errors.password}
              onBlur={handleBlur}
            />
        
        <Button className="m-2" type="submit"> Log In</Button>
      </form>

      
  <h2> don,t have account </h2>
    <Link className="text-red-500" to= "/SignUp">Sign Up</Link>
   
      </div>
    
  );
}

const Hoc = withFormik({initialValues:initialvalues,
      handleSubmit:callapi,
      validationSchema:schema,
                       });
  const Alert = WithAlert (Hoc(LogInPage));

export default  WithUser(Alert)