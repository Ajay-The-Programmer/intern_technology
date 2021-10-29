"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Home.css");
var Home_service_1 = require("../../Services/Home.service");
// import socketIOClient from 'socket.io-client';
// const ENDPOINT = "http://192.168.1.77:3000";
var Home = function () {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        submitPayment();
    }, []);
    /*   useEffect(() => {
          const socket = socketIOClient(ENDPOINT);
          socket.on("FromAPI", (data:any) => {
            setResponse(data);
          });
          submitPayment();
        }, []); */
    function submitPayment() {
        Home_service_1.HomeService.getData().then(function (res) {
            if (res) {
                setData(res);
            }
            else {
                console.log('Result not found');
            }
        })["catch"](function (error) {
            console.log(error);
        });
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "sidebar" },
            react_1["default"].createElement("a", { className: "active", href: "/" }, "Home"),
            react_1["default"].createElement("a", { href: "/login" }, "News"),
            react_1["default"].createElement("a", { href: "" }, "Contact"),
            react_1["default"].createElement("a", { href: "" }, "About")),
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("h4", null, "Welcome to Home page "),
            react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", null, "Id"),
                        react_1["default"].createElement("th", null, "Name"),
                        react_1["default"].createElement("th", null, "Email"))),
                react_1["default"].createElement("tbody", null, data.map(function (user_data, i) {
                    return react_1["default"].createElement("tr", { key: "" + i },
                        react_1["default"].createElement("td", null, user_data.id),
                        react_1["default"].createElement("td", null, user_data.name),
                        react_1["default"].createElement("td", null, user_data.email));
                }))))));
};
exports["default"] = Home;
