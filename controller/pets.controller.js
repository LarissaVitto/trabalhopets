const petsRepository = require("../repository/pets.repository");
petsRouter = require("../routes/pets.router");

routes.get("/", petsRepository);

module.exports = {
    retorna: (req, res) => {
        res.send(data)
    }
}
