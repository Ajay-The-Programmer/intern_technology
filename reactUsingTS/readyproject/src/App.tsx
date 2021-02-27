import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';



function App() {
    return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />    
      <Route exact path="/login" component={Login} />    
    </Router>
    );
}

export default App;


 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <code>Welcome to Default Page</code>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //         Learn React
    //     </a>
    //   </header>
    // </div>