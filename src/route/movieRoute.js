const restify = require("restify");
const movieController = require("../controller/movieController");
const log = require("../config/log").log;

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

exports.server = server;
