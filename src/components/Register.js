import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';


export default function Register(props) {
const[username, setUserName]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");
const[repassword, setRePassword]=useState("");
const[res, setRes]=useState([]);
const[input, setInput]=useState([]);

useEffect(()=>{
  axios.get('http://localhost:3000/inputs')
  .then(json => setInput(json.data))
  .catch((err) => console.log(err));
},[]);

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!input.some(el => (el.email === email )) && password===repassword){
    axios.post('http://localhost:3000/inputs', {name:username, email:email, password:password, repassword:repassword})
    .then(json => setRes([...res,json.data]));
    alert("Account created")
    props.onFormSwitch("home");
  }
  else if(password!==repassword){
    alert("Password mismatch");
  }
  else{
    alert("Account already exists. Please Login"); 
  }
  setEmail("");
  setPassword("");
  setUserName("");
  setRePassword("");
}

  return (
    <div className="main_container">
      <h1 className="contentheading">Register</h1>
    <form className="register_form" onSubmit={handleSubmit}>
        <label htmlFor='name' className="labelname">Name</label>
        <input value={username} type="text" id="name" name="name" placeholder="Enter your Full Name" required onChange={(e)=>setUserName(e.target.value)}/>
        <label htmlFor='email' className="labelname" >Email</label>
        <input value={email} type="email" id="email" name="email" placeholder="Enter your E-mail ID" required  onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='password' className="labelname" >Password</label>
        <input value={password} type="password" id="password" name="password" placeholder="Enter your Password" required onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor='repassword'  className="labelname">Re-Password</label>
        <input value={repassword} type="repassword" id="repassword" name="repassword" placeholder="Retype your Password" required onChange={(e)=>setRePassword(e.target.value)}/>
        <input type="submit" id='register' value="Register"/> 
    </form>
        <p className="parabutton">Already have an account?<button className="switchbutton" onClick={()=>props.onFormSwitch("login")}> Login here</button></p>     
    </div>
  )
}
