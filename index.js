const express = require("express");
const hbs = require("hbs");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(routes);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Servidor rodando na porta 8080!");
});