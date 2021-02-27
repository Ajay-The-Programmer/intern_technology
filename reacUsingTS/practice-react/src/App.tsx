import React from "react";
import "./App.css";

const Coder = () => {
  return <h1>Welcome to React Application</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Coder />
        <Coder />
        <Coder />
      </div>
    );
  }
}

export default App;
