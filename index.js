const mongoose = require('mongoose')
const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')

const RecipeController = require('./controllers/recipes')
const methodOverride = require('method-override')

const app = express()
const connection = mongoose
  .connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(connection =>
    console.log(
      `Connection established to database: '${connection.connection.name}'
      `
    )
  )
  .catch(connectionError =>
    console.log('Connection recipe database failed!', connectionError)
  )

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: false }))
app.use(methodOverride('_method'))

app.use('/', RecipeController)
let port = config.port
app.listen(port, () => {
  console.log(`✅  It's aliiive on PORT: ${port}! Aww...yeah!🌟`)
})

// const app = express()

// app.set('port', process.env.PORT || 3420)
// app.set('port', config.port)

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json({ extended: false }))
// app.use(methodOverride('_method'))

// app.use('/', RecipeController)

// app.listen(app.get('port'), () => {
//   console.log(`✅  It's aliiive on PORT: ${app.get('port')} Aww...yeah!🌟`)
// })
