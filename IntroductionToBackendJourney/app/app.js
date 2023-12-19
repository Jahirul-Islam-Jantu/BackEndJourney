require("dotenv").config("../.env");
const express = require("express");
const { errorHandler, notFoundHandler } = require("./error");

const app = express();

const myDB = require('../db/db')
myDB.create('user 1', 10)
myDB.create('user 2', 10)
myDB.create('user 3', 10)
myDB.create('user 4', 10)
myDB.create('user 5', 10)
myDB.create('user 6', 10)
myDB.bulkCreate('user 5', 10, 5)

const tickets = myDB.find()
console.log('All Tickets', tickets)
const winner = myDB.draw(2)
console.log('Winners',winner);


app.use(require("./middleware"));

app.use(require("./routes"));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
