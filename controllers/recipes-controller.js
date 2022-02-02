const recipe = require('../models/recipe')
const Recipe = require('../models/recipe')

const getAllRecipes = async (req, res, next) => {
  let recipes = await Recipe.find({})
    .then(recipes => {
      res.json({ recipes: recipes })
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
}

const getRecipe = async (req, res, next) => {
  let recipe = await Recipe.findOne({ title: req.params.title })
    .then(recipe => {
      res.json({ recipe: recipe })
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
}

const createRecipe = async (req, res, next) => {
  let recipe = await Recipe.create(req.body.recipe)
    .then(recipe => {
      res.json({ recipe: recipe })
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
}
const updateRecipe = async (req, res, next) => {
  let recipe = await Recipe.findOneAndUpdate(
    { title: req.params.title },
    req.body.recipe,
    { new: true }
  )
    .then(recipe => {
      res.json({ recipe: recipe })
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
}
const deleteRecipe = async (req, res, next) => {
  let recipe = await Recipe.findOneAndRemove({ title: req.params.title })
    .then(() => {
      res.json({ recipe: recipe })
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
}

exports.getAllRecipes = getAllRecipes
exports.getRecipe = getRecipe
exports.updateRecipe = updateRecipe
exports.createRecipe = createRecipe
exports.deleteRecipe = deleteRecipe
