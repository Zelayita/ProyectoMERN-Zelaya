const productController = {};

//Import del schema de la colección
//que vamos a ocupar
import productsModel from "../models/products.js";

//SELECT
productController.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}