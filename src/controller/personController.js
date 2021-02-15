const { model } = require("../service/personService");

exports.findAll = async function (req, res) {
  try {
    res.send(await model.findAll());
  } catch (error) {
    console.log("Error to find all movies");
  }
};
