import mongoose from 'mongoose';

const flagSchema = new mongoose.Schema({
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    priority:{
        type: String, 
        default: "low",
    },
    shelfCode:{
        type:String,
        required: true,
    },
    images: [{
        type: String, 
        required: true,
    }]
})

const flag = mongoose.model("Flag", flagSchema);
export default flag;