let game = {
    name : 'football'
}
let handler = {
    get : function(target,name){
        return name in target ? target[name] : 'non existent'
    }
}
var proxy = new Proxy(game, handler);
console.log(proxy.age);