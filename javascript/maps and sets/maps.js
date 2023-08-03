//maps - used to store pairs with key values in any data type.
const store = new Map([
    ["chicken", 100],
    ["beef", 200],
    ["mutton", 300],
    ["all", 600]
]);
store.forEach((key,value) => console.log(`${value} ${key}`));
let total = 0;
total += store.get("chicken");
console.log(total);
console.log(store.size);

