import React from "react";
import "./FormData.css"


import "./App.css";
import MyForm from "./pages/MyForm"
import CollectFormData from "./pages/CollectFormData";
import { BrowserRouter, Route } from "react-router-dom";
import UpdateData from "./pages/UpdateData";

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Route exact path="/" component={MyForm} />
        <Route exact path="/create" component={CollectFormData} />
        <Route  path="/update/:id" component={UpdateData} />
      </BrowserRouter>
    );
  }
}

export default App;
