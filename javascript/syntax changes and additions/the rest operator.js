//the rest operator
let numbers = [1,2,3,4,5]
function addition(...toAdd){
    let result = 0;
    for(let i=0; i<toAdd.length; i++){
        result+=toAdd[i];
    }
    return result;
}
console.log(addition(1,2,3,4,5));