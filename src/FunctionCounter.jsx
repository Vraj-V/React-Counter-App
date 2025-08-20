import React from 'react';
import { useState } from 'react';
function FunctionCounter(){
const [count,setCount] = useState(0);
const [message,setMessage] = useState("");
const increment =()=>{
  setCount(count+1);
}
const decrement =()=>{
    if(count>0){
        setCount(count - 1)
    }
    else{
        setMessage("Counter cannot go below zero");
    }
};


return(
    <div className="main">
      <h2 className="title">Functional Component</h2>
      <p className="count-value">{count}</p>
      <div className="button-container">
        <button
          onClick={decrement}
          className="decrement"
        >
          -
        </button>
        <button
          onClick={increment}
          className="increment"
        >
          +
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
)
}
export default FunctionCounter;