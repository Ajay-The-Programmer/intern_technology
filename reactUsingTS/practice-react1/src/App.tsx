import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Ajay");
  const [no, setNo] = useState(24);
  const increment = () => {
    setNo(no + 1)
    setNo((prev)=>prev+1)
    

  }

  return (
    <div className="App">
      <h1>React Hook</h1>
      <h3>{name}</h3>
      <h3>{no}</h3>
      <button onClick={() => { setName("Ankit") }}>Click</button>
      <button onClick={() => increment()}>increment </button>

    </div>
  );
}

export default App;
