const { findById } = require("../controller/movieController");
const queries = require("../db/cqlPerson");
const execultCyper = require("../db/executeCypher");

exports.model = {
  async findAll() {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findAll()
    );
  },

  async findById(id) {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findById(id)
    );
  },

  async findByName(name) {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findByName(name)
    );
  },

  async findAllDirectors() {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findAllDirectors()
    );
  },

  async findAllActors() {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findAllActors()
    );
  },

  async findPersonByMovie(title) {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findPersonByMovie(title)
    );
  },

  async updatePerson(object) {
    const person = await this.findById(object.id);
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.updatePerson(object, person[0])
    );
  },

  async createPerson(object) {
    const person = await this.findByName(object.name);
    
    if (!person.length == 0) {
      console.log(`Person "${object.name}"already exists`);
    } else {
      return await execultCyper.executeCypherAsync(
        queries.cql.backoffice.createPerson(object)
      );
    }
  },
};
