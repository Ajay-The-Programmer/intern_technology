import React from "react";

import "./App.css";

interface DataApp {
  name: string;
  status: string;
}

class Coder extends React.Component<DataApp> {
  render() {
    return (
      <div>
        <h1>Welcome to React Application</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.status}</h3>
        <h4>{this.props.children}</h4>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Coder name="Ajay" status="Programmer">
          Hii
        </Coder>
      </div>
    );
  }
}

export default App;
