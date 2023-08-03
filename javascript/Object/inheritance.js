class Animals{
    alive = true;
    eat(){
        console.log(`${this.name} can eat large prey`);
    }
    sleep(){
        console.log(`${this.name} sleeps well`);
    }
}
class Cheetah extends Animals{
    name = "cheetah";
    run(){
        console.log(`${this.name} runs very fast`);
    }
}
class Shark extends Animals{
    name = "shark";
    swim(){
        console.log(`${this.name} is a killer in ocean`)
    }
}
const shark = new Shark();
const cheetah = new Cheetah();
const animal = new Animals();
shark.eat();
animal.eat();
cheetah.sleep();
cheetah.run();
console.log(shark.alive)