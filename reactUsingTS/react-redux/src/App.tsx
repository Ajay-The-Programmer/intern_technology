import React from 'react';

import './App.css';
import { connect } from 'react-redux'
import { myActionCreationName } from './action/myaction';




function App(props: any) {
  console.log(props);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>My Name is : {props.myname}</h2>
      <button onClick={() => { props.changeName("devkar") }}>Change It</button>
    </div>
  );
}
const myStateToProps = (state: any) => {
  return {
    myname: state.name
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeName: (name: string) => {
      dispatch(myActionCreationName(name))

    }
  }
}

export default connect(myStateToProps, mapDispatchToProps)(App);
