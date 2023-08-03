//constructor - Its a kind of method
// allows to accept diffferent arguments and properties with a single class
class Students{
    constructor(name, age, cgpa){
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
    }
    rank(){
        console.log(`${this.name} aged ${this.age}, have a CGPA of ${this.cgpa}`);
    }
}
const student1 = new Students("yosuf", 21, 9.5);
const student2 = new Students("rohith", 20, 8.0);
const student3 = new Students("rovio", 22, 7.5);

student1.rank();
student2.rank();
student3.rank();