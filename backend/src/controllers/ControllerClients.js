/**
 * Campos a Utilizar
 * name,email,password,birthday,status,isVerified,loginAttempts, timeout(todavia no)
 * 
 */

const ControllerClients = {};

import ClientModel from '../models/clients.js'

//Select

ControllerClients.getClients = async (req,res) => {
    try {
        
        const client = await ClientModel.find();
        return res.status(200).json(client)

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}


//Insert
ControllerClients.insertClients = async (req,res) => {
    try {
        
        let {name,email,password,birthday,status,isVerified,loginAttempts,timeout} = req.body;

        //Validaciones Generales
        name = name?.trim();
        email = email?.trim();
        password = password?.trim();


        //Datos null
        if(!name || !email || !password || !birthday || !status || isVerified === null || !loginAttempts || !timeout){
            return res.status(400).json({message:"All fields are required"})
        }

        //Validacion de tamaño de Datos
         if(name.length < 2){
            return res.status(400).json({message:"name too short"})
        }

        if(password.length <= 5){
            return res.status(400).json({message:"password too short"})
        }

        if(email.length <= 6 ){
            return res.status(400).json({message:"name too short"})
        }


    } catch (error) {
        
    }
}