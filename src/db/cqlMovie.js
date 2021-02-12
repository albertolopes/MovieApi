module.exports.cql = {
  backoffice: {
    findAll() {
      const params = {};
      const cypher = `MATCH (m:Movie) RETURN m as movie, id(m) as id`;
      return { cypher, params };
    },

    findById(params_id) {
      const params = {id: params_id};
      const cypher = `
        MATCH (m:Movie) 
        WHERE id(m) = ${params.id}
        RETURN m as movie, id(m) as id
      `;
      return { cypher, params };
    },

    findMovieByDirector(params_name){
      const params = {name : `\"${params_name}\"`}
      const cypher = `
        MATCH (m:Movie)<-[:DIRECTED]-(p:Person)
        WHERE p.name = ${params.name}
        RETURN m as movie, id(m) as id
      `;
      return { cypher, params };
    },

    findMovieByActor(params_name){
      console.log(params_name)
      const params = {name : `\"${params_name}\"`}
      const cypher = `
        MATCH (m:Movie)<-[:ACTED_IN]-(p:Person)
        WHERE p.name = ${params.name}
        RETURN m as movie, id(m) as id
      `;
      return { cypher, params };
    }
  },
};
