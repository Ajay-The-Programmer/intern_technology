import React from 'react';

import './App.css';
import { connect } from 'react-redux'


const myStateToProps = (state: any) => {
  return {
    myname: state.name
  }
}


function App(props: any) {
  console.log(props);

  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
