import React from "react";
import Navbar from "./router/Navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/shared/Home";
import About from "./components/shared/About";

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
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
