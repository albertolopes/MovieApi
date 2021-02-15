const restify = require("restify");
const log = require("../config/log").log;

const movieController = require("../controller/movieController");
const actorController = require("../controller/personController")

const server = restify.createServer();

server.use(log);
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get("/movie", movieController.findAll);
server.get("/movie/:id", movieController.findById);
server.get("/movie/director/:name", movieController.findMovieByDirector);
server.get("/movie/actor/:name", movieController.findMovieByActor);
server.put("/movie", movieController.updateMovie);
server.post("/movie", movieController.createMovie);
server.del("/movie/:id", movieController.deleteMovie);

server.get("/person", actorController.findAll);

exports.server = server;
