// Promise - Its a promise to return something in the future
const promise = new Promise((resolve, reject) =>{
    let fileLoaded = false;

    if(fileLoaded){
        resolve("It is successful!!");
    }else{
        reject("unsuccessful!");
    }
});
promise.then(value => console.log(value))
.catch(error => console.log(error));