const { model } = require("../service/movieService");

exports.findAll = async function (req, res) {
  try {
    res.send(await model.findAll());
  } catch (error) {
    console.log("Error to find all movies");
  }
};

exports.findById = async function (req, res) {
  try {
    res.send(await model.findById(req.params.id));
  } catch (error) {
    console.log("Error to find by id");
  }
};

exports.findMovieByDirector = async function (req, res) {
  try {
    res.send(await model.findMovieByDirector(req.params.name));
  } catch (error) {
    console.log("Error to find by director");
  }
};

exports.findMovieByActor = async function (req, res) {
  try {
    res.send(await model.findMovieByActor(req.params.name));
  } catch (error) {
    console.log("Error to find by actor");
  }
};

exports.updateMovie = async function (req, res) {
  try {
    res.send(
      await model.updateMovie(req.body)
    );
  } catch (error) {
    console.log("Error to update movie");
  }
}

exports.createMovie = async function (req, res) {
  try {
    res.send(await model.createMovie(req.body))
  } catch (error) {
    console.log("Error to create movie");
  }
}

exports.deleteMovie = async function (req, res) {
  // try {
    res.send(await model.deleteMovie(req.params.id))
  // } catch (error) {
  //   console.log("Error to delete movie");
  // }
}
