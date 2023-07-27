class Student {
    //Constructor to initialize the object
    constructor(studentName){
        this.studentName = studentName;
    }

    //retun as a string
    toString(){
        return "My name is " + this.studentName;
    }
}

class Centennial extends Student{
    constructor(studentName, program) {
        super(studentName)
        this.program = program;
    }

    toString(){
        return "My name is " + this.studentName + "\nMy program is: " + this.program;
    }
}

let firstStudent = new Student("Armando");
let centennialStudent = new Centennial("Gwenn", "Software Engineering Techinician");
console.log(firstStudent.toString());
console.log(centennialStudent.toString());

let myName = "Krunal";
console.log(myName);
myName = "Leonardo"
console.log(myName);