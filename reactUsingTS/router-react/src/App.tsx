import React from "react";
import Navbar from "./router/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/shared/Home";
import About from "./components/cart/ItemCart";
import Error from "./components/Error";
import Profile from "./components/Profile";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={About} />
            <Route exact path="/:profile_id" component={Profile} />
            <Route component={Error} />
          </Switch>
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

