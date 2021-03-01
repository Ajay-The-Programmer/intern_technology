import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    users: [
      { id: 10, name: "Ajay" },
      { id: 11, name: "ankit" },
      { id: 12, name: "shubham" },
    ],
  };
  render() {
    const myname = this.state.users.map((item) => {
      return (
        <Link to={"/" + item.id}>
          <h2>{item.name}</h2>
        </Link>
      );
    });
    return <div>{myname}</div>;
  }
}
export default Home;
