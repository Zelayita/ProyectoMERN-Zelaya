import express from "express"
import productsRoute from "./src/routes/products.js"
import branchesRoutes from './src/routes/branches.js'
import routerEmployees from "./src/routes/employees.js";
import routerReview from "./src/routes/review.js";
import routerBrand from './src/routes/brands.js'
import routerAdmin from './src/routes/admin.js'

const app = express();

app.use(express.json())

app.use("/api/products", productsRoute)

app.use("/api/branches", branchesRoutes)

app.use("/api/employees", routerEmployees)

app.use("/api/review", routerReview)

app.use("/api/brand", routerBrand)

app.use("/api/admin", routerAdmin)

export default app;