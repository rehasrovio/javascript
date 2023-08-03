//Iterator basics
let nums = [1,4,3];
let it = nums[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())