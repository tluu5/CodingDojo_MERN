const { faker } = require('@faker-js/faker');

class Order{
    constructor(){
        const bases = ["espresso shot", "creamer", "ice", "dark roast", "light roast", "chai tea", "drip", "colombian", "black tea", "green tea", "hot water"];
        const additives = ["vanilla syrup", "sugar", "splenda", "scoop of ice cream", "bricks", "pre workout", "jameson", "crinnamon", "honey", "more water", "milk", "chocolate syrup", "hot fudge", "pumpkin spice", "coca cola"];
        const toppings = ["whipped cream", "nothing", "spinkled cinnamon", "caramel drizzle", "marshmallows", "shoe"]
        this.name = faker.name.findName();
        this.base = bases[Math.floor(Math.random() * bases.length)];
        this.additive = additives[Math.floor(Math.random() * additives.length)];
        this.topping = toppings[Math.floor(Math.random() * toppings.length)];
        this.coffeeShop = faker.company.companyName() + " Coffee Roaster Inc.";
        this.cost = "$" + faker.finance.amount();
        this.barista = faker.image.avatar();
    }
}

module.exports = Order;