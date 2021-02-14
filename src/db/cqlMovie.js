module.exports.cql = {
  backoffice: {
    findAll() {
      const params = {};
      const cypher = `MATCH (m:Movie) RETURN m as movie, id(m) as id`;
      return { cypher, params };
    },

    findById(params_id) {
      const params = { id: params_id };
      const cypher = `
        MATCH (m:Movie) 
        WHERE id(m) = ${params.id}
        RETURN m as movie, id(m) as id
      `;

      return { cypher, params };
    },

    findMovieByDirector(params_name) {
      const params = { name: `\"${params_name}\"` };
      const cypher = `
        MATCH (m:Movie)<-[:DIRECTED]-(p:Person)
        WHERE p.name = ${params.name}
        RETURN m as movie, id(m) as id
      `;

      return { cypher, params };
    },

    findMovieByActor(params_name) {
      const params = { name: `\"${params_name}\"` };
      const cypher = `
        MATCH (m:Movie)<-[:ACTED_IN]-(p:Person)
        WHERE p.name = ${params.name}
        RETURN m as movie, id(m) as id
      `;
      
      return { cypher, params };
    },

    updateMovie(object, currentMovie) {
      const params = {
        tagline: object.tagline != "" ? object.tagline : currentMovie.movie.tagline,
        title: object.title != "" ? object.title : currentMovie.movie.title,
        released: 
          object.released != "" && typeof object.released != "undefined"
          ? object.released 
          : currentMovie.movie.released
      };
      const cypher = `
        MATCH (m:Movie) 
        WHERE id(m)=${object.id} 
        SET m = {
          tagline: "${params.tagline}",
          title: "${params.title}",
          released: ${params.released}
        } 
        RETURN m as movie, id(m) as id
      `;

      return { cypher, params };
    },

    createMovie(object){
      const params = {
        tagline: object.tagline,
        title: object.title,
        released: object.released 
      };

      const cypher = `
        CREATE (m:Movie {
          tagline: "${params.tagline}",
          title: "${params.title}",
          released: ${params.released}
        }) 
        RETURN m as movie, id(m) as id
      `;

      return { cypher, params };
    },

    deleteMovie(params_id){
      console.log(params_id);
      const params = { id: params_id };
      const cypher = `MATCH (m:Movie) WHERE id(m) = ${params.id} DELETE m`
      
      return { cypher, params };
    }
  },
};
