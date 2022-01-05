import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { auth, signInWithEmailAndPassword, googleLogin } from "../../connection/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { toastMessage } from '../../utils/toast'

import "./Login.css";

export default  function Login() {
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  console.log("user", user);
  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate("/home");
  }, [user, loading])

  function handleLogin() {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if (!email.match(regexp)) {
      toastMessage('error', 'Please insert a valid email!', 'error_pwd');
    } else if (password.length < 8)  {
      toastMessage('error', 'Password must be at least 8 characters!', 'error_pwd')
    } else{
      signInWithEmailAndPassword( email, password)
    }
    
  }

 return (
 <Fragment>
   <div className="Login__container">
    <form className="Login__form">
     <h1> Movie App </h1>
     <input 
        type="email" 
        placeholder="E-mail"  
        className="Input_credentials"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
     <input 
        type="password" 
        placeholder="Password"  
        className="Input_credentials"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
     <button  type="button" className="Main_btn primary" onClick={()=>handleLogin()}>
      Login
     </button>
     <button  type="button" className="Main_btn secundary" onClick={()=>googleLogin()}>
      Login with Google
     </button>
     <p className="Create_text"> Create your own account. <Link to="/register">Register</Link> now! </p>
    </form>
  </div>
 </Fragment>
 )
}
