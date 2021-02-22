define(["require", "exports"], function (require, exports) {
    "use strict";
    var Customer = /** @class */ (function () {
        function Customer(name, age) {
            this.name = name;
            this.age = age;
        }
        Customer.prototype.getName = function () {
            return this.name;
        };
        return Customer;
    }());
    return Customer;
});
