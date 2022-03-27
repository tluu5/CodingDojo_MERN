const express = require("express");
const app = express();
const port = 1000;
const { faker } = require('@faker-js/faker');
const User = require("./user")
const Company = require("./company")
const User_Company = require("./user_company")

app.get("/api", (req,res)=>{
    res.json({message:"you found the secret route!"});
})

app.get("/api/users/new", (req,res)=>{
    res.json(new User());
})

app.get("/api/companies/new", (req,res)=>{
    res.json(new Company());
})

app.get("/api/user/company", (req,res)=>{
    res.json(new User_Company());
})

app.listen(port, ()=>console.log(`Running on port ${port} is a new way I like to be!`));