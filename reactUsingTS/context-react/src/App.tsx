import React from 'react';
import './App.css';

const myContext = React.createContext({ name: ' ajay', age: 25 })

class Coder3 extends React.Component {

  static contextType = myContext;
  render() {

    return (
      < React.Fragment>
        <h3>my name :{this.context.name}</h3>
        <h3>my age :{this.context.age}</h3>
      </React.Fragment>
    )
  }
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
    <div className="App">

      <myContext.Provider value={{ name: "Ajay", age: 24 }}>
        <Coder />
      </myContext.Provider>

    </div>
  );
}

export default App;
