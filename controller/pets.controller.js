const petsRepository = require("../repository/pets.repository");
petsRouter = require("../routes/pets.router");

module.exports = {
    find: async (req, res) => {
      const data = await petsRepository
        .find()
        .then((result) => result)
        .catch((error) => {
          res.status(500).send(error);
        });
  
      res.render("pet", { data });
    },
};