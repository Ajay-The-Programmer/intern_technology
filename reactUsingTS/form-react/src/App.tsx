import React from "react";
import "./ShowData.css"


import "./App.css";

import CollectFormData from "./pages/CollectFormData";
import { BrowserRouter, Route } from "react-router-dom";
import UpdateData from "./pages/UpdateData";
import ShowData from "./pages/ShowData";

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Route exact path="/" component={ShowData} />
        <Route exact path="/create" component={CollectFormData} />
        <Route  path="/update/:id" component={UpdateData} />
      </BrowserRouter>
    );
  }
}

export default App;
