//array de funciones
const ControllerBrands = {};

//Se importa la coleccion que se va a utilizar
import BrandModel from '../models/brands.js'

//Select
ControllerBrands.getBrands = async (req,res) => {
    try {
        const brands = await BrandModel.find();
         return res.status(200).json(brands)
    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

//Insert
ControllerBrands.insertBrands = async (req,res) => {
    try {
        //Datos a Guardar
        let {name, slogan, address, isActive} = req.body;
        //Validaciones
        name = name?.trim();
        slogan = slogan?.trim();
        address = address?.trim();

        //Validaciones datos null
        if(!name || !slogan || !address){
            return res.status(400).json({message:"All fields are required"})
        }

        //Validacion de tamaño
        if(name.length < 3){
            return res.status(400).json({message:"name too short"})  
        }
        if(address.length > 100){
            return res.status(400).json({message:"name too long"})
        }

        //Guardar datos
        const newBrand = new BrandModel({name, slogan, address, isActive});
        await newBrand.save()

        res.status(201).json({message: "Brand Saved"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error , " + error})
    }
}

//Delete
ControllerBrands.deleteBrands = async (req,res) => {
    try {
        const deleteBrand = await BrandModel.findByIdAndDelete(req.params.id)

        //Validacion por si no fue correctamente eliminado
        if(!deleteBrand){
            return res.status(404).json({message:"brand not found"})
        }

        return res.status(200).json({message:"brand deleted"})
    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}


//Updated
ControllerBrands.updateBrands = async (req,res) => {
    try {
        //pedimos los nuevos datos

    let{name, slogan, address, isActive} = req.body;

    //validaciones
    name = name?.trim();
    slogan = slogan?.trim();
    address = address?.trim();

    //Validacion de tamaño
     if(name.length < 3){
         return res.status(400).json({message:"name too short"})  
    }
    if(address.length > 100){
       return res.status(400).json({message:"name too long"})
    }


    //actualizamos
    const updateBrands = await BrandModel.findByIdAndUpdate(
        req.params.id, {
            name,
            slogan,
            address,
            isActive,
        },{new:true}
    )

    if(!updateBrands){
        return res.status(404).json({message: "brand not found"})
    }

    return res.status(200).json({message:"brand updated"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

export default ControllerBrands;