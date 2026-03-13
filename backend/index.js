import app from "./app.js"
import "./database.js"
import { config } from "./src/Config.js";

//Creamos la función
//que se encarga de ejecutar el servidor
async function main(params) {
    app.listen(config.server.port);
    console.log("Server on Port" + config.server.port)
}

main();