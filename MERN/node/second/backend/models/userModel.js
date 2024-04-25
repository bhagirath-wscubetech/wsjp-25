const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            required: true
        },
        email: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        password: {
            type: String,
            maxLength: 300,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        }
    }
)

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;