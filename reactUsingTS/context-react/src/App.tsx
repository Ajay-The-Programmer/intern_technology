import React, { useReducer } from 'react';
import './App.css';
import { Coder } from './components/Coder';
import { NameContext, AgeContext } from './components/CreateContext';
import { iState, Reducer } from './reducers/Reducer';



function App() {

  const [data, dispatch] = useReducer(Reducer, iState)
  const getName = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    dispatch({ type: 'CHANGE_NAME', payload: res[0].name })

  }
  return (


    <div className="App">
      <h2>my name is : {data.name}</h2>
      <h2>i wish to {data.wish[0]}</h2>

      <button onClick={() => getName()}>CHANGE</button>
    </div>

  );
}

export default App;


