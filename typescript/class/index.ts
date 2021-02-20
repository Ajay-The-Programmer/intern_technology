class Person {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private getName(): string {
        return this.name;
    }

    getDetails(): string {
        return  this.getName();
    }
     getAge():number{
        return this.age;
    }
    
}

class Student extends Person {
    tmarks: number;
    constructor(name: string, age: number, tmarks: number) {
        super(name, age);  
        this.tmarks = tmarks;    
    }
    getMarks(): number {
        return this.tmarks;
    }
    
 
 
   
}

let std1 = new Student('Sheena', 23, 600);
console.log(std1.getDetails()); // output is Name is Sheena
console.log(std1.getMarks());
console.log(std1.getAge());
 // output is 500
// console.log(std1.getFullName()); // output is Sheena