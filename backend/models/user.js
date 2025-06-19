import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        enum: ['Customer', 'Employee'],
        required: true
    },
    additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
    image:{
        type: String,
        required: true
    },
    resetPasswordExpires:{
        type: Date,
    }
})

const user = mongoose.model("User", userSchema);
export default user;