const queries = require("../db/cqlPerson");
const execultCyper = require("../db/executeCypher")

exports.model = {
    async findAll() {
      return await execultCyper.executeCypherAsync(
        queries.cql.backoffice.findAll()
      );
    },
  };
  