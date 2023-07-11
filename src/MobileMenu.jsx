import React from "react";
import {Link} from "react-router-dom";


function MobileMenu({setUser}){

  const handleLogOut=()=>{
    localStorage.removeItem("token");
    setUser(undefined);
  }
  
  return(
    <div className="flex flex-col sm:block flex ">
    
    <Link to= "/LogIn">Log in</Link>
<Link to= "/SignUp">Sign Up</Link>
      
      <button onClick={handleLogOut}> Log out</button>  
    </div>
    
  );
}

export default MobileMenu;