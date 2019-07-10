const axios = require('axios')
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken")

const jwtSecret = require("../jwtSecret")

const app = express()

// CORS support
app.use(
  cors({
    origin: [/localhost/],
  })
)

const getData = async () => {
  try {
    return await axios.get('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
  } catch (error) {
    console.error("Sorry, there was an error getting the data", error)
  }
}

/* Add your routes here */

// Default route
const defaultRoute = express.Router()
defaultRoute.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CityTaps Intern Project! This is your first message from the server!',
  })
})


defaultRoute.get('/leaks', async (req, res) => {
  const data = await getData()
  const filteredData = data.data
    .filter((dataSet, index, array) =>
      dataSet.consumptionVolume > 15 && array[index + 1].consumptionVolume > 15 && array[index + 2].consumptionVolume > 15
      ||
      dataSet.consumptionVolume > 15 && array[index - 1].consumptionVolume > 15 && array[index + 1].consumptionVolume > 15
      ||
      dataSet.consumptionVolume > 15 && array[index - 1].consumptionVolume > 15 && array[index - 2].consumptionVolume > 15
    )
  res.json(filteredData)
})

defaultRoute.post('/login', (req, res) => {
  console.log(req.body)
  if (req.body.username === "citytaps" && req.body.password === "thisisfun") {
    user = req.body.username
    const tokenUserinfo = { username: user }
    const token = jwt.sign(tokenUserinfo, jwtSecret)
    res.header("Access-Control-Expose-Headers", "x-access-token")
    res.set("x-access-token", token)
    res.status(200).send({ details: "user connected", user })
  } else {
    res.status(401).send({ auth: false, token: null, error_msg: "This password is invalid" })
  }
})

app.use('/', defaultRoute)
// Start server
app.listen(3000)
