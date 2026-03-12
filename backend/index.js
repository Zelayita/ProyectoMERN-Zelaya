import app from "./app.js"

//Creamos la función
//que se encarga de ejecutar el servidor
async function main(params) {
    app.listen(4000);
}

main();