// const mongoose = require('../db/connection')
// const mongoose = require('mongoose')
const Recipe = require('../db/models/recipe')
const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.render('recipes-index', {});
// });

router.get('/', (req, res) => {
  Recipe.find({}).then(recipes => res.json({ recipes: recipes }))
})

// router.get('/recipes', (req, res) => {
//     res.render('recipes')
// });

router.get('/:title', (req, res) => {
  Recipe.findOne({ title: req.params.title }).then(recipe => {
    res.json({ recipe: recipe })
  })
})

router.post('/', (req, res) => {
  Recipe.create(req.body.recipe).then(recipe => {
    // res.redirect(`/recipes/${recipe.title}`)
    res.json({ recipe: recipe })
  })
})

router.put('/:title', (req, res) => {
  Recipe.findOneAndUpdate({ title: req.params.title }, req.body.recipe, {
    new: true
  })
    .then(recipe => {
      // res.redirect(`/recipes/${recipe.title}`)
      res.json({ recipe: recipe })
    })
    .catch(err => console.log('Oops!', err))
})

router.delete('/:title', (req, res) => {
  Recipe.findOneAndRemove({ title: req.params.title }).then(() => {
    // res.redirect('/recipes')
    res.json({ recipe: recipe })
  })
})

module.exports = router
