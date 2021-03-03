"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Pages/Home/Home");
var Login_1 = require("./Pages/Login/Login");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/home", component: Home_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1["default"] })));
}
exports["default"] = App;
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
