module.exports.cql = {
  backoffice: {
    findAll() {
      const params = {};
      const cypher = `MATCH (p:Person) RETURN p as person, id(p) as id`;
      return { cypher, params };
    },
  },
};
