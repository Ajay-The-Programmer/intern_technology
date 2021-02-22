namespace StudentSetup {
  export interface StudDetails {
    name: string;
    age: number;
  }

  export function addSpace(str) {
    return str.split("");
}
  export class Student implements StudDetails{
    name: string;
    age: number;
    constructor(studentDetails: StudDetails) {
      this.name =studentDetails.name;
      this.age = studentDetails.age;
    }
    getName(): string {
        return this.name;
    }
  }
}
