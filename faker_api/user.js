const { faker } = require('@faker-js/faker');

class User{
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
    }
}

module.exports = User;