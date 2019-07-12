const axios = require('axios')
const express = require('express')
const cors = require('cors')

const routes = require("./routes/index")


const app = express()



// CORS support
app.use(
  cors({
    origin: [/localhost/],
  })
)

// Default route
const defaultRoute = express.Router()
defaultRoute.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CityTaps Intern Project! This is your first message from the server!',
  })
})

//Leaks route
app.use('/leaks', routes.leaks)

app.use('/', defaultRoute)
// Start server
app.listen(3000)
