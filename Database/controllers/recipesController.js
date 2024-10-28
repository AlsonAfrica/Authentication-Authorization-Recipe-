// import a recipe schema/model to be use to create a new recipe
import Recipe from "../models/recipe.js"

// async function with HTTP request and response for creating a new recipe and error handling 
const createItem = async (req,res)=>{
    try{
      const recipe = await Recipe.create(req.body)
      res.status(201).json(recipe)
    } catch (error){
      res.status(500).json({error:"an error occurred while creating a recipe",details: error.message})
    }
}


// endpoint function to retrieve recipes with pagination
const findrecipe = async (req, res) => {
  const { page = 1, limit = 2 } = req.query; // Default to page 1 and limit of 10
  const options = {
      page: parseInt(page, 10), // Convert to integer
      limit: parseInt(limit, 10) // Convert to integer
  };

  try {
      const recipes = await Recipe.find()
          .limit(options.limit)
          .skip((options.page - 1) * options.limit); // Skip records for pagination

      // Count total number of recipes for pagination metadata
      const totalRecipes = await Recipe.countDocuments();
      
      res.status(200).json({
          totalRecipes,
          totalPages: Math.ceil(totalRecipes / options.limit),
          currentPage: options.page,
          recipes // Return the paginated recipes
      });
  } catch (error) {
      res.status(500).json({
          error: "an error occurred while fetching recipes",
          details: error.message
      });
  }
};


// end point function returning a specific recipe by id
const findRecipeById = async (req,res)=>{
  const {id} = req.params;
  try{
    const recipe = await Recipe.findById(id);
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json(recipe)
  } catch (error){
    res.status(500).json({error:"an error occurred while fetching a recipe",details: error.message,validate: "please enter a valid id"})
  }
}

// endpoint function to delete a specific recipe by id
const deleteRecipeById = async (req,res)=>{
  const {id} = req.params;
  try{
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json({message:"recipe deleted successfully",recipe})
  } catch (error){
    res.status(500).json({error:"an error occurred while fetching a recipe",details: error.message,validate: "please enter a valid id"})
  }
}

// end point function to update a specific recipe by id
const updateRecipeById = async (req,res)=>{
  const {id} = req.params;
  const updateData = req.body;
  try{
    const recipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json({message:"recipe deleted successfully",recipe})
  } catch (error){
    res.status(500).json({error:"an error occurred while updating the recipe",details: error.message})
  }
}

export  { createItem, findrecipe,findRecipeById,deleteRecipeById,updateRecipeById  };