//basic class
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log('you are welcome!! '+ this.name);
    }
}
let person = new Person('rovio');
person.greet();
console.log(person.name);