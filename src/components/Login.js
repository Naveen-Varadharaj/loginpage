import axios from "axios";
import { useState, useEffect } from "react"
import React from 'react'
export default function Login(props) {
    
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");
const[input, setInput]=useState([]);


useEffect(()=>{
  axios.get('http://localhost:3000/inputs')
  .then(json => setInput(json.data))
  .catch((err) => console.log(err));
},[]);



const handleSubmit=(e)=>{
   e.preventDefault();  
   if((input.some(el => el.email === email))&& (input.some(el => el.password === password))){
    
    props.onFormSwitch("home");
  }
  else{
    alert("Account doesn't exist");
    props.onFormSwitch("register");
  }
  setEmail("");
  setPassword("");
}
    
return (
    <div className="main_container">
      <h1 className="contentheading">Login</h1>
    <form className="login_form" onSubmit={handleSubmit}>
        <label htmlFor='email' className="labelname">E-mail</label>
        <input value={email} type="email" id="email" name="email" placeholder="Enter your Email ID" required onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='password' className="labelname" >Password</label>
        <input value={password} type="password" id="password" name="password" placeholder="Enter your Password" required onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" id="login" value="Login"/>
    </form>
    <p className="parabutton">Don't have an account?<button className="switchbutton" onClick={()=>props.onFormSwitch("register")}> Register here</button></p>
    
    </div>
  )
}
