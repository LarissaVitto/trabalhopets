const express = require("express");
const petsController = require("../controller/pets.controller");

const routes = new express.Router();

routes.get("/", petsController.find);

module.exports = routes;
