const fruits = new Set(['apple', 'mango', 'grape']);
fruits.add('banana'); //can add unique value
fruits.add('grape'); //already exists so ignored

for(let fruit of fruits){
    console.log(fruit);
};

fruits.forEach(fruit => console.log(fruit));