let array = [1,3,2,5,4,7,6];
let iterator = {
    index : 0 ,
    next(){
        if(this.index < array.length){
            return {
                value : array[this.index++],
                done : false,
            }
        }else{
            return{
                done : true
            }
        }
    }
}
console.log(iterator.next());
console.log(iterator.next());