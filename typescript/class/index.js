var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getDetails = function () {
        return this.getName();
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, tmarks) {
        var _this = _super.call(this, name, age) || this;
        _this.tmarks = tmarks;
        return _this;
    }
    Student.prototype.getMarks = function () {
        return this.tmarks;
    };
    return Student;
}(Person));
var std1 = new Student('Sheena', 23, 600);
console.log(std1.getDetails()); // output is Name is Sheena
console.log(std1.getMarks());
console.log(std1.getAge());
// output is 500
// console.log(std1.getFullName()); // output is Sheena
