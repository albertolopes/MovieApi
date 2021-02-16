const { model } = require("../service/personService");

exports.findAll = async function (req, res) {
  try {
    res.send(await model.findAll());
  } catch (error) {
    console.log("Error to find all persons");
  }
};

exports.findById = async function (req, res) {
  try {
    res.send(await model.findById(req.params.id));
  } catch (error) {
    console.log("Error to find person by id");
  }
}

exports.findByName = async function (req, res) {
  try {
    res.send(await model.findByName(req.params.name))
  } catch (error) {
    console.log("Error to find person by name");
  }
}

exports.findAllDirectors = async function (req, res) {
  try {
    res.send(await model.findAllDirectors())
  } catch (error) {
    console.log("Error to find all directors");
  }
}

exports.findAllActors = async function (req, res) {
  try {
    res.send(await model.findAllActors())
  } catch (error) {
    console.log("Error to find all actors");
  }
}

exports.findPersonByMovie = async function (req, res) {
  try {
    res.send(await model.findPersonByMovie(req.params.title))
  } catch (error) {
    console.log("Error to find person by movie");
  }
}

exports.updatePerson = async function (req, res) {
  try {
    res.send(await model.updatePerson(req.body))
  } catch (error) {
    console.log("Error to update person");
  }
}

exports.createPerson = async function (req, res) {
  try {
    res.send(await model.createPerson(req.body))
  } catch (error) {
    console.log("Error to create person");
  }
}