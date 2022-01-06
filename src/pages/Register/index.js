import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { auth, signUpWithEmailAndPassword } from "../../connection/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { toastMessage } from '../../utils/toast';
import "./Register.css";

export default  function Register() {
  const navigate = useNavigate ();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate("/home")
  }, [user, loading])

  function handleSignUp() {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if (name.length < 1) {
      toastMessage('error', 'Please insert a full name!', 'error_name');
    } else if (!email.match(regexp)) {
      toastMessage('error', 'Please insert a valid email!', 'error_pwd');
    } else if (password.length < 8)  {
      toastMessage('error', 'Password must be at least 8 characters!', 'error_pwd')
    } else{
      signUpWithEmailAndPassword(name, email, password)
    }
  }

 return (
 <Fragment>
   <div className="Login__container">
    <form className="Login__form">
     <h1> Movie App </h1>
     <input 
      type="text"
      value={name} 
      placeholder="Name"  
      className="Input_credentials"
      onChange={({target})=>setName(target.value)}
     />
     <input 
      type="email"
      value={email} 
      placeholder="E-mail"  
      className="Input_credentials"
      onChange={({target})=>setEmail(target.value)}
     />
     <input 
      type="password" 
      value={password}
      placeholder="Password"  
      className="Input_credentials"
      onChange={({target})=>setPassword(target.value)}
     />
     <button  type="button" className="Main_btn primary" onClick={()=>handleSignUp()}>
      Register
     </button>
     <p className="Create_text"> 
        If you have an account account. 
        <Link to="/" className="link_to"> Login</Link> now! 
      </p>
    </form>
  </div>
 </Fragment>
 )
}
