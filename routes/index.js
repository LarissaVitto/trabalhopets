const express = require("express");
const routes = new express.Router();
//const routes = require("./routes/");

//const petsRoutes = require("./pets.router");
//const hbs = require("hbs");


const app = express();

app.use(express.json());
app.use(routes);


routes.use("/pets", petsRoutes);

module.exports = routes;

