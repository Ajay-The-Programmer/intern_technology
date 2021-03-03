import React from "react";
import "./FormData.css";
import {Services} from "./Services/Home.Services"



class MyForm extends React.Component {
  state: {
    Name: string;
    Email: string;
    Mobile_Number: null;
    Password: any;
    Confirm_Password: any;
  };

  myChangeHandler = (event: { target: { value: any; name: string } }) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitData = (event: any) => {
    console.log(this.state.Name);
    console.log(this.state.Email);
    console.log(this.state.Mobile_Number);
    console.log(this.state.Password);
    console.log(this.state.Confirm_Password);
   console.log( Services.getData());
   
    event.preventDefault();
  };

  constructor(props: any) {
    super(props);
    this.state = {
      Name: " ",
      Email: "",
      Mobile_Number: null,
      Password: "",
      Confirm_Password: "",
    };
  }

  render() {
    return (
      <div>
        <form className="FormData" onSubmit={this.submitData}>
          <label>Name :</label>
          <input
            type="text"
            name="userName"
            onChange={this.myChangeHandler}
          />{" "}
          <br />
          <label>Email :</label>
          <input type="text" name="Email" onChange={this.myChangeHandler} />
          <br />
          <label>Mobile_Number:</label>
          <input
            type="number"
            name="Mobile_Number"
            onChange={this.myChangeHandler}
          />
          <br />
          <label>Password :</label>
          <input
            type="password"
            name="Password"
            onChange={this.myChangeHandler}
          />
          <br />
          <label>Confirm Password :</label>
          <input
            type="password"
            name="Confirm-Password"
            onChange={this.myChangeHandler}
          />
          <br />
          <button type="submit">Click</button>
        </form>
      
      </div>
    );
  }
}
export default MyForm;
