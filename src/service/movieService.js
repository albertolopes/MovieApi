const queries = require("../db/cqlMovie");
const execultCyper = require("../db/executeCypher")

exports.model = {
  async findAll() {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findAll()
    );
  },

  async findById(id){
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findById(id)
    );
  },

  async findMovieByDirector(name){
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findMovieByDirector(name)
    );
  },

  async findMovieByActor(name){
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.findMovieByActor(name)
    );
  },

  async updateMovie(object){
    const currentMovie = await this.findById(object.id);
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.updateMovie(object, currentMovie[0])
    );
  },

  async createMovie(object) {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.createMovie(object)
    );
  },

  async deleteMovie(id) {
    return await execultCyper.executeCypherAsync(
      queries.cql.backoffice.deleteMovie(id)
    );
  }
};
