import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Application</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default App;
