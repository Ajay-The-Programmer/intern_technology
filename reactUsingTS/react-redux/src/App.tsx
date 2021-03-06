import React from 'react';

import './App.css';
import { connect } from 'react-redux'
import { myActionCreationName } from './action/myaction';


function App(props: any) {
  console.log(props);
  console.log(props.wish);
  console.log(props.name);

  

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>My Name is : {props.myname}</h2>
      <h2>I Like is : {props.myWish}</h2> 
      <button onClick={() => { props.changeName() }}>Change Name</button>
      <button onClick={() => { props.changeWish(["Ajay " , "Devkar"]) }}>Change Wish</button>
    </div>
  );
}
const myStateToProps = (state: { name: any; wish: any; }) => {
  return {
    myname: state.name,
    myWish: [state.wish]
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeName: (name:any) => {
      dispatch(myActionCreationName())

    }
  }
}
const wishDispatchToProps = (dispatch:[]) => {
  return {
    changeWish: (wish:[]) => {
      dispatch({ type: "CHANGE_WISH", payload:["run","go"] })
    }
  }
}

export default connect(myStateToProps, mapDispatchToProps,wishDispatchToProps)(App);
