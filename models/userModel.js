import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            requred: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    }
)
export const User = mongoose.model('User', userSchema);