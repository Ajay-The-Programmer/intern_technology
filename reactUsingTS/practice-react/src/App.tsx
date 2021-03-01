import React from "react";
import Navbar from "./router/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/shared/Home";
import About from "./components/shared/About";
import Error from "./components/Error";
import Profile from "./components/Profile";


// interface DataApp {
//   name: string;
//   status: string;
//   children?: string;
// }

// function Coder(props: DataApp) {
//   return (
//     <div>
//       <h1>Welcome to React Props Concept</h1>
//       <h2>{props.name}</h2>
//       <h3>{props.status}</h3>
//       <h4>{props.children}</h4>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/:profile_id" component={Profile}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
