class Ninja{
    constructor(name, health=10){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }
    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}
class Sensei{
    constructor(name, health=200, speed = 10, strength = 10){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = 10;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Wisdom: ${this.wisdom}`);
        return this;
    }
    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
    speakWisdom(){
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const ninja1 = new Ninja("Ryu");
ninja1.sayName().showStats().drinkSake().showStats();

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.sayName().showStats().drinkSake().showStats().speakWisdom();