const express = require("express");
const app = express();
const port = 4000;
const { faker } = require('@faker-js/faker');
const Order = require("./order")

app.get("/api", (req,res)=>{
    res.json({message:"you found the secret route!"});
})

app.get("/api/fake", (req,res)=>{
    const response = {
        name: faker.name.findName(),
        catchPhrase: faker.hacker.phrase()
    }
    res.json(response);
})

app.get("/api/order", (req,res)=>{
    res.json(new Order());
})

app.listen(port, ()=>console.log(`Running on port ${port} is a new way I like to be!`));