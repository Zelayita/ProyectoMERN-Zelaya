/*
Campos: 
Name
lastname
salary
dui
phone
email
password
idbranches
*/


import mongoose, {Schema, model} from "mongoose";

const employeesSchema = new Schema({

    name: {
        type:String
    },
    lastname:{
        type:String
    },
    salary:{
        type:Number
    },
    DUI:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    idBranches:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Branches'
    }
},{
    timestamps: true,
    strict: false
})

export default model("Employee", employeesSchema)
