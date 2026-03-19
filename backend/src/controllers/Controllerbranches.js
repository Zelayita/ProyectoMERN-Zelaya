const Controllerbracnhes = {};
 
//Import del esquema a utilizar
import branchModel from "../models/branches.js"
 
//SELECT
Controllerbracnhes.getBranches = async (req, res) =>{
    const branches = await branchModel.find();
    res.json(branches)
}
 
//POST
Controllerbracnhes.insertBranches = async (req, res) =>{
    const {name, address, schedule, isActive} = req.body
   
    const newBranch = new branchModel({name, address, schedule, isActive})
 
    await newBranch.save();
 
    res.json({message: "Branch saved"});
}
 
//ELIMINAR
Controllerbracnhes.deleteBranches = async (req, res) =>{
    await branchModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branch deleted"})
}
 
//ACTUALIZAR
Controllerbracnhes.updateBranches = async (req, res) =>{
    const {name, address, schedule, isActive} = req.body;
    await branchModel.findByIdAndUpdate(req.params.id, {
        name,
        address,
        schedule,
        isActive
    }, {new: true})
 
    res.json({message: "Branch updated"})
}
 
export default Controllerbracnhes;