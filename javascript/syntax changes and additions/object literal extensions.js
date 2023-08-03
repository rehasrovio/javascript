
//object literal extensions
let name = 'rovio';
let age = 40;

let obj = {
    name : 'max',
    age : 22,
    execute(){
        console.log(this.name + ' , ' + this.age);
    }
}
obj.execute();
