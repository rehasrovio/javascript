class Engineering{
    constructor(department, year){
        this.department = department;
        this.year = year;
    }
}
class Cse extends Engineering{
    constructor(department, year, section){
        super(department, year);
        this.section = section;
    }

}
class Ece extends Engineering{
    constructor(department, year, mine){
        super(department,year);
        this.mine = mine;
    }
}
const cse = new Cse('computer science', 2019, 'B');
console.log(cse.department);
console.log(cse.year);
console.log(cse.section);