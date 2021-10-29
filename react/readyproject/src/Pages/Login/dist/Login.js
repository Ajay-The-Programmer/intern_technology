"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "row justify-content-md-center" },
            react_1["default"].createElement("div", { className: "col-md-4" },
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement("div", { className: "form-group" },
                        react_1["default"].createElement("label", null, "First Name"),
                        react_1["default"].createElement("input", { name: "firstName", type: "text", className: "form-control", placeholder: "Enter name" })),
                    react_1["default"].createElement("div", { className: "form-group" },
                        react_1["default"].createElement("label", null, "Email address"),
                        react_1["default"].createElement("input", { name: "email", type: "email", className: "form-control", placeholder: "Enter email" })),
                    react_1["default"].createElement("div", { className: "form-group" },
                        react_1["default"].createElement("label", null, "Password"),
                        react_1["default"].createElement("input", { name: "password", type: "password", className: "form-control", placeholder: "Password" })),
                    react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary" }, "Login"))))));
};
exports["default"] = Login;
