const restify = require("restify");
var movieRoute = require('restify-router').Router;
const movieController = require("../controller/movieController");

movieRoute.get("/movie", movieController.findAll);
movieRoute.get("/movie/:id", movieController.findById);
movieRoute.get("/movie/director/:name", movieController.findMovieByDirector);
movieRoute.get("/movie/actor/:name", movieController.findMovieByActor);
movieRoute.put("/movie", movieController.updateMovie);
movieRoute.post("/movie", movieController.createMovie);
movieRoute.del("/movie/:id", movieController.deleteMovie);

module.exports = movieRoute;
