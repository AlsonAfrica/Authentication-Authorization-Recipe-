import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator"; // Correctly import the validator package

// Creating a user schema with signing fields
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Regex to validate password complexity
                return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#^@$!%*?&-]).{8,}$/.test(value);
            },
            message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
        },
    },
});

// Method to compare passwords
userSchema.methods.matchPasswords = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;
