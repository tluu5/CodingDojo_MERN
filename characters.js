const Fighter = require("./index");
class Samus extends Fighter{
    constructor(playerNum=1){
        super("Samus", playerNum, 8, 6, 8);
        this.charge = false;
    }
    special(opponent){
        if(this.charged){
            this.charged = false;
            opponent.percent += 35;
            console.log(`Samus fired her charge shot at ${opponent.name} and dealt 35 percent!!`);
        }
        else{
            this.charged = true;
            console.log(`Samus is charging her arm cannon!`);
        }
    }
}
class Jigglypuff extends Fighter{
    constructor(playerNum){
        super("Jigglypuff", playerNum, 3, 8, 1);
    }
    special(opponent){
        if(Math.floor(Math.random() * 2) === 1){
            opponent.percent += 40;
            console.log(`Jigglypuff used rest on ${opponent.name}. It's super effective!`);
        }
        else{
            console.log(`Jigglypuff used rest on ${opponent.name}. It didn't work. Bummer!!`);
        }
    }
}
const rob = new Fighter("Rob", 1, 8, 7, 5);
const samus = new Samus(2);
const jiggs = new Jigglypuff(3);

// samus.special(rob);
// samus.special(rob);
// console.log(rob);
jiggs.special(samus);
