import React from 'react';
import './App.css';

function App() { 
  return <User name="John Doe" />
}

function User(props) {
   return <h1>Hello, {props.name}</h1>;
   
}


export default App;
