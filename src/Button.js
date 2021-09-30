import React, { useState } from "react";
import './Button.css'
import './App'
function Button({name,thing,city}) {
    const [c,setc]=useState('')
    const password = new Array(3)
    const handleInput=()=>{
        password[0] = name
        password[1] = thing
        password[2] = city
        setc(logic(password))
       };
      const logic= (pass1) =>{
          let c = ''
        var randomElement = Math.floor(Math.random() * (pass1.length )) + 0; 
        c=c+pass1[randomElement]
    
        for(var i=0;i<=1;i++){
        var randomASCII = Math.floor(Math.random() * (47 - 33 + 1)) + 33;
        c=c+String.fromCharCode(randomASCII)  
        }
    
        for(var i=0;i<=2;i++){
            var randomNumber = Math.floor(Math.random() * (57 - 48 + 1)) + 48;
            c = c+String.fromCharCode(randomNumber)  
        }
        return c;
      }
      

    return (
        <div class="svg-wrapper">
     <a href="#" class="button" onClick={handleInput} >Generate Password</a>
    <div class= "password">{
      c ? <p>{c}</p>
      :
      ''
    }
    </div>


    </div>
    
        );
    }
export default Button;
     