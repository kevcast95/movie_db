import React, { Fragment } from "react";
import { Link, useNavigate  } from "react-router-dom";

import "./Login.css";

export default  function Login() {
 const navigate = useNavigate ();

 function handleLogin() {
  navigate("/home")
 }

 return (
 <Fragment>
   <div className="Login__container">
    <form className="Login__form">
     <h1> Movie App </h1>
     <input type="email" placeholder="E-mail"  className="Input_credentials"/>
     <input type="password" placeholder="Password"  className="Input_credentials"/>
     <button  type="button" className="Main_btn primary" onClick={()=>handleLogin()}>
      Login
     </button>
     <button  type="button" className="Main_btn secundary">
      Login with Google
     </button>
     <p className="Create_text"> Create your own account. <Link to="/register">Register</Link> now! </p>
    </form>
  </div>
 </Fragment>
 )
}
