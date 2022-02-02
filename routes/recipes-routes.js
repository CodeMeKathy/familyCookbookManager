const express = require('express')
const RecipeController = require('../controllers/recipes-controller')

const recipeRouter = express.Router()

// Get All Recipes
recipeRouter.get('/', RecipeController.getAllRecipes)

// Get Recipe
recipeRouter.get('/:title', RecipeController.getRecipe)

// Create Recipe
recipeRouter.post('/', RecipeController.createRecipe)

// Update Recipe
recipeRouter.put('/:title', RecipeController.updateRecipe)

// Delete
recipeRouter.delete('/:title', RecipeController.deleteRecipe)

module.exports = recipeRouter
