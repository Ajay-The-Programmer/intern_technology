import React from "react";
import WithPower from "./WithPower";

class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.status}</h3>
      </div>
    );
  }
}

export default WithPower(Home);
