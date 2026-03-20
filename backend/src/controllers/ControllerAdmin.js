const ControllerAdmin = {};

import { model } from 'mongoose';
/**
 * Campos a Utilizar
 * name, email,password, isVerified
*/

import modelAdmin from '../models/admin.js'


//Select 
ControllerAdmin.getAdmins = async (req,res) =>{
    try {
        const admin = await modelAdmin.find();
        return res.status(200).json(admin)
    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error: " + error})
    }
}

//Insert 
ControllerAdmin.insertAdmins = async (req,res) => {
    try {
        
        let {name, email,password,isVerified} = req.body;

        //Validaciones
        name = name?.trim();
        email = email?.trim();
        password = password?.trim();

        //Datos null
        if(!name || !email || !password || isVerified === null){
            return res.status(400).json({message:"All fields are required"})
        }

        //Tamaño de datos

        if(name.length < 2){
            return res.status(400).json({message:"name too short"})
        }

        if(password.length <= 5){
            return res.status(400).json({message:"password too short"})
        }

        if(email.length <= 6 ){
            return res.status(400).json({message:"name too short"})
        }

        //Guardar datos
        const newAdmin = new modelAdmin({name, email,password,isVerified});
        await newAdmin.save()

        res.status(201).json({message:"Admin saved"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error: " + error})
    }
}


//Delete
ControllerAdmin.deleteAdmins = async (req,res) => {
    try {
        
        const deleteAdmin = await modelAdmin.findByIdAndDelete(req.params.id)

        if(!deleteAdmin){
            return res.status(404).json({message:"admin not found"})     
        }

        return res.status(200).json({message:"admin deleted"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error: " + error})
    }
}


//Update
ControllerAdmin.updateAdmin = async (req,res) => {
    try {
        
        let{name,email,password,isActive} = req.body;

         //Validaciones
        name = name?.trim();
        email = email?.trim();
        password = password?.trim();


        //Tamaño de datos
        if(name.length < 2){
            return res.status(400).json({message:"name too short"})
        }

        if(password.length <= 5){
            return res.status(400).json({message:"password too short"})
        }

        if(email.length <= 6 ){
            return res.status(400).json({message:"name too short"})
        }

        //Actualizamos
        const updateAdmin = await modelAdmin.findByIdAndUpdate(
            req.params.id,{
                name,
                email,
                password,
                isActive,
            },{new:true}
        )

        if(!updateAdmin){
            return res.status(404).json({message: "admin not found"})
        }

        return res.status(200).json({message:"Admin Updated"})


    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error: " + error})
    }
}

export default ControllerAdmin;

