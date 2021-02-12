var appConfigs = require("./app-services-configs");
const api_server = require("./src/route/movieRoute");

async function startup() {
  console.log("Iniciando a aplicação...");
  try {
    console.log("Iniciando o módulo api...");

    api_server.server.listen(
      appConfigs.configs.elegibilidade_api.http_port,
      function () {
        console.log(
          "%s módulo iniciado em %s",
          api_server.server.name,
          api_server.server.url
        );
      }
    );
  } catch (err) {
    console.log("Erro ao iniciar api de elegibilidade.");
    console.error(err);
    process.exit(1);
  }
}

startup();
