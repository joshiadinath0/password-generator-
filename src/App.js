import React, { useState } from "react";

import "./App.css";
import "./Button";
import Button from "./Button";
const pass = new Array(3)
function App() {
  
const [name,setName] = useState('')
const [thing,setThing] = useState('')
const [city,setCity] = useState('')

  return (
    <div>
      <div class="heading">
        <h1>Password Generator</h1>
      </div>
      <div class="form">
        <h>What's your name?</h>
        <span></span>
        <input type="text" onChange={e =>setName(e.target.value)} />
        <h> One thing you love the most?</h>
        <input type="text" onChange={e =>setThing(e.target.value)} />
        <h>City where you stay?</h>
        <input type="text" onChange={e =>setCity(e.target.value)} />
    <Button name={name} thing={thing} city={city}></Button>
    
      </div>
    </div>
  );
}

export default App;
