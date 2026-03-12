import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/PriceSmartDB")

//Comprobar que todo funciona
const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("DB IS CONNECTED");
})
connection.on("disconnected", ()=>{
    console.log("DB IS DISCONNECTED")
})
connection.on("error", (error)=> {
    console.log("ERROR FOUND" + error)
})