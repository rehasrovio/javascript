let cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let shuffle = array => {
    let initialIndex = array.length;

    while(initialIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        initialIndex-=1;

        let temp =  array[initialIndex];
        array[initialIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
shuffle(cards);
cards.forEach(card => console.log(card));