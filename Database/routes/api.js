import express from "express"
import {createItem,findrecipe,findRecipeById,deleteRecipeById,updateRecipeById  } from "../controllers/recipesController.js"
import {loginUser,registerUser} from "../controllers/userController.js"
import protect from "../authMiddleware.js/authMiddleware.js"

const router = express.Router()

// LOGIN THE USER
router.post("/user/login", loginUser)

// POST THE USER ON BD/register user
router.post("/user/register", registerUser)

// Route for creating a new recipe
router.post('/recipe',protect,createItem)

// Route for retrieving all recipes
router.get('/recipes',protect,findrecipe)

// Route for retrieving a recipe by ID
router.get('/recipe/:id',protect,findRecipeById)

// Route for deleting a recipe by ID
router.delete("/recipe/:id",protect,deleteRecipeById)

// Route for updating a recipe by ID
router.put("/recipe/:id",protect,updateRecipeById )


export default router