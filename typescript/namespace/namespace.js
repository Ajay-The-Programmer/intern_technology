var StudentSetup;
(function (StudentSetup) {
    function addSpace(str) {
        return str.split("");
    }
    StudentSetup.addSpace = addSpace;
    var Student = /** @class */ (function () {
        function Student(studentDetails) {
            this.name = studentDetails.name;
            this.age = studentDetails.age;
        }
        Student.prototype.getName = function () {
            return this.name;
        };
        return Student;
    }());
    StudentSetup.Student = Student;
})(StudentSetup || (StudentSetup = {}));
var a = new StudentSetup.Student({ name: "ajay", age: 24 });
console.log("The name is :" + StudentSetup.addSpace(a.getName()));
