var Student = /** @class */ (function () {
    function Student(age, name, last_name) {
        this.age = age;
        this.name = name;
        this.last_name = last_name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getLastName = function () {
        return this.last_name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}());
var student = new Student(24, "ajay", "Devakr");
console.log(student.name);
console.log(student.last_name);
console.log(student.age);
