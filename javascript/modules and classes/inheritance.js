//Inheritance
class Parent{
    constructor(name){
        this.name = name;
    }
    trust(){
        console.log('they trust '+this.name +' and he is '+this.age);
    }
}
class Child extends Parent{
    constructor(age){
        super('rovio');
        this.age = age;
    }
    trustTwice(){
        super.trust();
        super.trust();
    }
}
let child = new Child(12);
let parent = new Parent('max');
child.trustTwice();