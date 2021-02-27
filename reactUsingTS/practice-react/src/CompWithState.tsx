import React from "react";
import "./stateMethod.css";

class StateApp extends React.Component {
  state = {
    name: "ajay",
  };

  changeName=()=>{
    this.setState({
      name: "Ajay-The-Programmer",
    });
  }

  render() {
    return (
      <div className="stateMethod">
        <h1>Welcome to React State Concept</h1>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.changeName()}>Change Name</button>
      </div>
    );
  }
}
export default StateApp;
