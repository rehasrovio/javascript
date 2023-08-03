//objects - group of properties and methods
//Properties - what an object has
//methods - what it shoud do
//can be called by object name continued by a '.'
const sports = {
    name : 'football', 
    players : 11, 
    duration : '90 mins',

    freeKick : function(){
        console.log('Its a freeKick oppurtunity to score goal');
    },
    fulltime : function(){
        console.log('Its time when a game ends')
    }
}
console.log(sports.name);
console.log(sports.players);
console.log(sports.duration);

sports.freeKick();
sports.fulltime();