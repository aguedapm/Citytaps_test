const express = require('express')
const cors = require('cors')

const app = express()

// CORS support
app.use(
  cors({
    origin: [/localhost/],
  })
)

/* Add your routes here */

// Default route
const defaultRoute = express.Router()
defaultRoute.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CityTaps Intern Project! This is your first message from the server!',
  })
})
app.use('/', defaultRoute)
// Start server
app.listen(3000)
