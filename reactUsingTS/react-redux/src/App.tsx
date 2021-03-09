import React from 'react';

import './App.css';
import { connect } from 'react-redux'
import {  myActionCreationName } from './action/myaction';



function App(props: any) {
  // props.myWish.push(props.myWish);
  console.log(props);
  console.log(props.myWish);
  console.log(props.myname);

  const myWish = props.myWish.map((item: any) => {
    return <h2 key={Math.random()}>{item}</h2>
  })

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>My Name is : <strong>  {props.myname} </strong></h2>
      <h3>I Like is : {myWish}</h3>
      <button onClick={() => { props.changeName() }}>Change Name</button>
      <button onClick={() => { props.addWish(['codding','tracking']) }}>Change Wish</button>
    </div>
  );
}
const myStateToProps = (state: { name: any; wish: any; }) => {
  
  return {
    myname: state.name,
    myWish: state.wish

  }


}
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeName: () => {
      dispatch(myActionCreationName())},
      addWish: (wish:[]) => {dispatch({type: "ADD_WISH",payload:wish}) }

    
  }
}


export default connect(myStateToProps, mapDispatchToProps)(App);
