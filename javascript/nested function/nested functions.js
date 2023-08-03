//nested functions - thes are functions which are inside another function
//which cannot be invoked from outside.
let userName = 'rovio';
let password = 777;

function login(){

    user();
    pass();
    function user(){
        console.log(`welcome! ${userName}`);
    }
    function pass(){
        console.log(`your pass is ${password}`);
    }
}
login();