
import React,{ useState } from 'react';


import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
//import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';




function App() {
  const[currForm, setCurrform]=useState("login");
  const toogleForm=(formName)=>{
    setCurrform(formName)
 }
  return (
    <div className="App">
    
    {currForm ==="login"? <Login onFormSwitch={toogleForm}/>: (currForm ==="home"? <Home onFormSwitch={toogleForm}/>:<Register onFormSwitch={toogleForm}/>)}
    
    </div>
  );
}

export default App; 
