import mongoose from "mongoose";

// Define schema with field validation
const recipesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Recipe name is required"],
            minlength:[3,"Name must be at least 3 characters long"],
            maxLength:[100,"Name must be at least 100 characters long"]
        },
        ingredients: [
            {
                name: {
                    type: String,
                    required: [true,"Ingredients name is required"],
                    minlength: [2,"Ingredient name must be at least 2 characters long"]
                },
                quantity: {
                    type: String, 
                    required: false,
                    maxlength:[20, "Quantity must be less than 20 characters"]
                }
            }
        ],
        instructions: {
            type: String,
            required: [true, "Instructions are required"],
            minlength: [10, "Instructions must be at least 10 characters long"]
        },
        preparationTime: {
            type: String,
            required: [true, "Preparation time is required"],
        },
        servings: {
            type: String,
            required: [true, "Servings are required"],
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        category: {
            type: String,
            required: true
        }
    }
);

// Model represents the 'Recipes' collection within  Mongo Database
const Recipe = mongoose.model('Recipe', recipesSchema);

export default Recipe;
