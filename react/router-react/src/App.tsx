import React from "react";
import Navbar from "./router/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/shared/Home";

import Error from "./components/Error";

import Cart from "./components/cart/Cart";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Navbar} />
            <Route exact path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

