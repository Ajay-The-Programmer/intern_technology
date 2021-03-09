import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Carts from './components/Carts';
import Home from './components/Home';

import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch>
          <Route path="/" component={Home} />
          <Route path="/carts" component={Carts} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
