const ControllerReview = {};

//Import del schema de la colección
//que vamos a ocupar
import ReviewModel from "../models/review.js";

//SELECT
ControllerReview.getReview = async (req, res) => {
    const review = await ReviewModel.find()
    res.json(review)
}

//Insertar
ControllerReview.insertReview = async (req,res) => {
    const {idEmployee, idProducts, rating, comments} = req.body;

    const newreview = new ReviewModel({idEmployee, idProducts, rating, comments}) 

    await newreview.save()

    res.json({message: "Review Saved"})
}


//Eliminar
ControllerReview.deleteReview = async(req,res) =>{
    await ReviewModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review Deleted"})
}

//Actualizar
ControllerReview.updateReview = async (req,res) => {

    const {idEmployee, idProducts, rating, comments} = req.body;

    await ReviewModel.findByIdAndUpdate(req.params.id, {idEmployee, idProducts, rating, comments}, {new:true})

    res.json({message: "Review Updated"})
}

export default ControllerReview;