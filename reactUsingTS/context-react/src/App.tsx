import React, { useContext } from 'react';
import './App.css';

const NameContext = React.createContext(' ajay')
const AgeContext = React.createContext(25)

const Coder3 = () => {

  const name = useContext(NameContext)
  const age = useContext(AgeContext)


  return (

    <>
      <h1>My name is :{name}</h1>
      <h2>My age is : {age}</h2>
    </>

  )

}

const Coder2 = () => {
  return (
    <div><Coder3 /></div>
  )
}
const Coder = () => {
  return (
    <div><Coder2 /></div>
  )
}

function App() {


  return (
    <NameContext.Provider value={"Ajay"}>
      <AgeContext.Provider value={24}>
        <div className="App">

          <Coder />

        </div>
      </AgeContext.Provider >
    </NameContext.Provider >
  );
}

export default App;


// A/C 3417849440
// IFSC CODE :CBIN0280712