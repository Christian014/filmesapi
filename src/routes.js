const express = require("express");
const crudFilme = require("./controllers/crudFilme");
const routes = express.Router();

routes.post("/insertFilmes", crudFilme.postFilmes);
routes.get("/getAllFilmes", crudFilme.getAllFilmes);
routes.get("/getFilmesId/:id", crudFilme.getId);
routes.put("/updateFilmes/:id", crudFilme.updateFilmes);
routes.delete("/deleteFilmesId/:id", crudFilme.deleteFilmes);

module.exports = routes;