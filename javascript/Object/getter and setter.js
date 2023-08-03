// getter - acts as a additional security with which user can't change value directly
//by adding an underscore developers can understand that its secured content.
class Car{
    constructor(speed,gas){
        this._speed = speed;
        this._gas = gas;
    }
    get speed(){
        return this._speed;
    }
    get gas(){
        return `${this._gas}L (${this._gas/50 * 100}%)`
    }
    set gas(value){
        this._gas = value;
    }
}
const car = new Car(80,50);
car.speed = 100;
car.gas = 60;
console.log(car.speed);
console.log(car.gas);

