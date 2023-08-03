//symbols basics
let firstSymbol = Symbol('this is hidden text.');
let obj = {
    normalVar : 'It will show',
    [firstSymbol] : 22
}
console.log(obj);