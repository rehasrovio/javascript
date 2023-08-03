class Fruits{
    constructor(colour, name){
        this.colour = colour;
        this.name = name;
    }
}
const fruit1 = new Fruits("red", "apple");
const fruit2 = new Fruits("yellow", "banana");

function displayInfo(fruit){
console.log(fruit.colour);
console.log(fruit.name);
}
function changeColour(frt,names){
frt.name = names;
}
changeColour(fruit2, "papaya")
displayInfo(fruit2);