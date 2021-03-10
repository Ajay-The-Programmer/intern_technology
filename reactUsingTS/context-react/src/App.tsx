import React, { createContext, Dispatch, useReducer } from 'react';
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
  
  // const [data, dispatch] = useReducer(Reducer, iState)
  return (
    <NameContext.Provider value={{name:data.name , dispatchName:dispatch }}>
      <div className="App">
      
       <Coder/>
       <button onClick={()=>getName()}> Click </button>
      </div>
    </NameContext.Provider>

  );
}

export default App;


