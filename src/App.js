import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {


  const [val, addVal] = useState()
  const [calc, setCalc] = useState()

  function Value() {
    setCalc(evaluate(val).toString())
  }

  return (
    <h1 className='App'>
      
      <input type="text" value={val} onChange={(e)=>addVal(e.target.value)}/>
      <button type='submit' onClick={Value}>Total</button>
      <br /><br />

      {calc}
      
    </h1>
  );
}

export default App;