import mongoose from "mongoose";

// Define schema
const recipesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        ingredients: [
            {
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: String, 
                    required: false
                }
            }
        ],
        instructions: {
            type: String,
            required: true
        },
        preparationTime: {
            type: String,
            required: true
        },
        servings: {
            type: String,
            required: true
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
