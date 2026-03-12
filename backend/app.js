import express from "express"
import productsRoute from "./src/routes/products.js"

const app = express();

app.use("/api/products", productsRoute)

export default app;