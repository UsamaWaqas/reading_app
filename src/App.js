import React, { useState }   from 'react';
import Messege from './Messege';
import './App.css';




function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
<div className={`box ${isMorning ? 'dayLight' : ''}`}>

<h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
<Messege counter={count} />
 <br />

 <button  id = "btn"   onClick={() => setCount(count + 1)}>
   click me
 </button>
 

 

 

 <button     id = "btn"  onClick={() => setMorning(!isMorning)}> 
   Update Day
 </button>

</div>

  );
}

export default App;
