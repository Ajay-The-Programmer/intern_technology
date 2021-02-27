import React from "react";
import "./App.css";

const Coder = (props: { name: string; status: string }) => {
  return (
    <div>
      <h1>Welcome to React Application</h1>
      <h2>{props.name}</h2>
      <h3>{props.status}</h3>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (  
      <div className="App">
        <Coder name="Ajay" status="Programmer" />
      </div>
    );
  }
}

export default App;
