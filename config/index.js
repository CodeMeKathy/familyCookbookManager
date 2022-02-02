const dotenv = require('dotenv')

// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config()

const config = {
  port: process.env.PORT || 3800,
  databaseURL: process.env.DATABASE_URL
}

module.exports = config
