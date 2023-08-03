// this - reference to a particular object
// the object depends on the immediate context
const names = {
    n1 : 'yosuf', 
    n2 : 'rovio',

    friend : function(){
        console.log(`${this.n1} "and" ${this.n2} "are friends"`)
    }
}
const friends = {
    n1 : 'rohith', 
    n2 : 'rovio',

    friend : function(){
        console.log(`${this.n1} "and" ${this.n2} "are friends"`)
    }
}
names.friend();
friends.friend();
