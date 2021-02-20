class Student{

    age:number;
    name:string;
    last_name:string;

    constructor(age:number,name:string,last_name:string){

        this.age=age;
        this.name=name;
        this.last_name=last_name;
    }

    getName(){
        return this.name;
    }
    getLastName(){
        return this.last_name;
    }
    getAge(){
        return this.age;
    }
}

let student=new Student(24,"ajay","Devkar");
console.log(student.name);
console.log(student.last_name);
console.log(student.age);
