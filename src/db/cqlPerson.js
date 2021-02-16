module.exports.cql = {
  backoffice: {
    findAll() {
      const params = {};
      const cypher = `MATCH (p:Person) RETURN p as person, id(p) as id`;
      return { cypher, params };
    },

    findById(params_id) {
      const params = { id: params_id };
      const cypher = `
        MATCH (p:Person) 
        WHERE id(p) = ${params.id} 
        RETURN p as person, id(p) as id
      `;
      return { cypher, params };
    },

    findByName(params_name) {
      const params = { name: params_name };
      const cypher = `
        MATCH (p:Person {name: "${params.name}"}) 
        RETURN p as person, id(p) as id
      `;
      return { cypher, params };
    },

    findAllDirectors() {
      const params = {};
      const cypher = `
        MATCH (p:Person)-[:DIRECTED]->(:Movie) 
        RETURN p as person, id(p) as id
      `;
      return { cypher, params };
    },

    findAllActors() {
      const params = {};
      const cypher = `
        MATCH (p:Person)-[:ACTED_IN]->(:Movie) 
        RETURN p as person, id(p) as id
      `;
      return { cypher, params };
    },

    findPersonByMovie(params_title) {
      const params = { title: params_title };
      const cypher = `
        MATCH (p:Person)-[]->(Movie {title: "${params.title}"}) 
        RETURN p
      `;
      return { cypher, params };
    },

    updatePerson(object, currentPerson) {
      const params = {
        id: object.id,
        name: object.name != "" ? object.name : currentPerson.person.name,
        born:
          object.born != "" && typeof object.born != "undefined"
            ? object.born
            : currentPerson.person.born,
      };
      const cypher = `
        MATCH (p:Person) 
        WHERE id(p)=${params.id} 
        SET p = {
          name: "${params.name}",
          born: "${params.born}"
        }
        RETURN p as person, id(p) as id
      `;

      return { cypher, params };
    },

    createPerson(object) {
      const params = {
        name: object.name,
        born: object.born
      };
      const cypher = `
        CREATE (p:Person {
          name: "${params.name}",
          born: "${params.born}"
        }) 
        RETURN p as person, id(p) as id
      `;

      return { cypher, params };
    },
  },
};
