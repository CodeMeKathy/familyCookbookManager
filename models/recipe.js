const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  ingredients: { type: String },
  instructions: { type: String },
  cookbook: { type: String },
  origindate: { type: String }
})

module.exports = mongoose.model('Recipe', recipeSchema)
