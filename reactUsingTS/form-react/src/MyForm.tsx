import React from "react";
class MyForm extends React.Component {
  state: { userName: string; password: null };

  myChangeHandler = (event: { target: { value: any; name: string } }) => {
    let nam = event.target.name;

    let pass = event.target.value;
    if (nam === "password") {
      if (!Number(pass)) {
        alert("Please password Enter only as Degit ");
      }
    }

    this.setState({ [nam]: pass });
  };

  constructor(props: any) {
    super(props);
    this.state = {
      userName: " ",
      password: null,
    };
  }
  render() {
    return (
      <form>
        <label>Enter UserName</label>
        <input type="text" name="userName" onChange={this.myChangeHandler} />
        <label>Enter Password</label>
        <input type="text" name="password" onChange={this.myChangeHandler} />

        <h2>
          {this.state.userName} {this.state.password}
        </h2>
      </form>
    );
  }
}
export default MyForm;

//   onSubmitForm = (event: { preventDefault:()=>void}) => {
//     event.preventDefault();
//     alert("welcome you login successfull"+this.state.userName)
//   };
