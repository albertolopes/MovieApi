const config = require("../config/apiConfig");
const { db } = config;

exports.executeCypherAsync = async (cqlQuery) => {
  try {
    return await db.execute(cqlQuery);
  } catch (error) {
    console.log(error);
    console.log(cqlQuery);
    throw error;
  }
};
