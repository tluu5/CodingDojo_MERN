const { faker } = require('@faker-js/faker');

class Company{
    constructor(){
        const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.id = ids[Math.floor(Math.random() * ids.length)];
        this.name = faker.name.findName();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

module.exports = Company;