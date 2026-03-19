import mongoose, {Schema, model} from "mongoose";

const ReviewSchema = new Schema({
    idEmployee:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    idProducts:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    rating:{
        type: Number
    },
    comments:{
        type:String
    }
},{
    timestamps: true,
    strict: false
}
);

export default model("Reviews", ReviewSchema);