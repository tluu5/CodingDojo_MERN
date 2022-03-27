const { faker } = require('@faker-js/faker');

class User_Company{
    constructor(){
        const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.id = ids[Math.floor(Math.random() * ids.length)];
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phonenumber = faker.phone.phoneNumber();
        const emails = ["Gmail", "Yahoo", "icloud", "att.net", "facebook", "amazon", "snapchat"];
        this.email = emails[Math.floor(Math.random() * emails.length)];
        const passwords = ["qwertyuio", "qazxsdedfvbh", "qwertyhbgvfcdsfg", "hytredfgh", "q23456y654efghju765r4", "qsdfgytredrfghuytrf", "fghuytr54edfghytred"];
        this.password = passwords[Math.floor(Math.random() * passwords.length)];
        this.id = ids[Math.floor(Math.random() * ids.length)];
        this.name = faker.name.findName();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

module.exports = User_Company;