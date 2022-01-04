import React, { Fragment } from "react";
import { Link, useNavigate  } from "react-router-dom";

import "./Login.css";

export default  function Register() {
  const navigate = useNavigate ();

 return (
 <Fragment>
   <div className="Login__container">
    <form className="Login__form">
     <h1> Movie App </h1>
     <input type="email" placeholder="E-mail"  className="Input_credentials"/>
     <input type="password" placeholder="Password"  className="Input_credentials"/>
     <button  type="button" className="Main_btn primary" >
      Register
     </button>
     <p className="Create_text"> If you have an account account. <Link to="/">Login</Link> now! </p>
    </form>
  </div>
 </Fragment>
 )
}
