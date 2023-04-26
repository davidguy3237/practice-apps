require("dotenv").config();
const express = require("express");
const path = require("path");
const controllers = require('./controllers');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json()); // parses all incoming JSON request bodies

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/words', controllers.get);

app.post('/words', controllers.post);

app.delete('/words', controllers.delete);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
