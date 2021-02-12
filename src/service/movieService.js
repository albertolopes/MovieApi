const queries = require("../db/cqlMovie");
const execultCyper = require("../db/executeCypher")

exports.model = {
  async getAll() {
    const cql = queries.cql.backoffice.findAll();
    return await execultCyper.executeCypherAsync(cql);
  },

  async getById(req){
    const cql = queries.cql.backoffice.findById(req.params.id);
    return await execultCyper.executeCypherAsync(cql);
  },

  async findMovieByDirector(req){
    const cql = queries.cql.backoffice.findMovieByDirector(req.params.name);
    return await execultCyper.executeCypherAsync(cql);
  },

  async findMovieByActor(req){
    const cql = queries.cql.backoffice.findMovieByActor(req.params.name);
    return await execultCyper.executeCypherAsync(cql);
  }
};
