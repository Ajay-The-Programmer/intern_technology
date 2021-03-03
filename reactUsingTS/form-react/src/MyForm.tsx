import React from "react";
class MyForm extends React.Component {
  state: { userName: string };

  myChangeHandler = (event: { target: { value: string } }) => {
    this.setState({
      userName: event.target.value,
    });
  };
  onSubmitForm = (event: { preventDefault:()=>void}) => {
    event.preventDefault();
    alert("welcome you login successfull"+this.state.userName)
  };

  constructor(props: any) {
    super(props);
    this.state = {
      userName: " ",
    };
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>Enter Your Name</label>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" />
        <h2>{this.state.userName}</h2>
      </form>
    );
  }
}
export default MyForm;
