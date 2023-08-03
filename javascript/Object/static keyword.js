//Static keyword - using static keyword before methods and arguments
//inside the class makes it only belongs to the class not the objects
class Sports{
    static noOfSports = 0;
    constructor(name){
        this.name = name;
        Sports.noOfSports+=1;
    }
    static startRace(){
        console.log(`${this.name} to the GAME!!`)
    }
}
const sport1 = new Sports('football')
const sport2 = new Sports('cricket')
const sport3 = new Sports('tennis')

Sports.startRace();
Sports.startRace();
console.log(Sports.noOfSports);