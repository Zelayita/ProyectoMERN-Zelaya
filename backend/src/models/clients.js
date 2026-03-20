/**
 * Campos a Utilizar
 * name,email,password,birthday,status,isVerified,loginAttempts, timeout(todavia no)
 * 
 */

import {Schema, model} from "mongoose";

const ClientSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    birthday:{
        type: Date
    },
    status:{
        type: Boolean
    },
    isVerified:{
        type: Boolean
    },
    loginAttempts:{
        type: Number
    },
    timeout:{
        type: Date
    }
},{
    timestamps: true,
    strict: false
})

export default model("Client", ClientSchema)