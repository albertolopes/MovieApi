const { model } = require("../service/movieService");

exports.findAll = async function (req, res) {
  try {
    res.send(await model.getAll());
  } catch (error) {
    console.log("Error to find all movies");
  }
};

exports.findById = async function (req, res) {
  try {
    res.send(await model.getById(req));
  } catch (error) {
    console.log("Error to find by id");
  }
};

exports.findMovieByDirector = async function (req, res) {
  try {
    res.send(await model.findMovieByDirector(req));
  } catch (error) {
    console.log("Error to find by director");
  }
};

exports.findMovieByActor = async function (req, res) {
  try {
    res.send(await model.findMovieByActor(req));
  } catch (error) {
    console.log("Error to find by actor");
  }
};
