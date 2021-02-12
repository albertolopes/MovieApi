const QNeo4j = require("@qualitech/qneo4j");
const appConfigs = require("../../app-services-configs");

const configs = appConfigs.configs.elegibilidade_api;

exports.db = new QNeo4j({
  url: configs.url_neo4j_infra_bolt,
  username: configs.neo4j_infra_user,
  password: configs.neo4j_infra_password,
  autoCloseDriver: false,
});
