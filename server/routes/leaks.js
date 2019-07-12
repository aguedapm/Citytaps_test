const express = require("express")
const axios = require('axios')

const router = express.Router();

const getData = async () => {
    try {
      return await axios.get('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
    } catch (error) {
      console.error("Sorry, there was an error getting the data", error)
    }
  }

router.get('/', async (req, res) => {
  const data = await getData()
  let filteredArray = []
  data.data.map((dataSet, index, array) => {
    if (
      dataSet.consumptionVolume > 15
      && array[index + 1].consumptionVolume > 15
      && array[index + 2].consumptionVolume > 15
      && array[index + 3].consumptionVolume <= 15
    ) {
      filteredArray.push([dataSet, array[index + 1], array[index + 2]])
    }
  })
  res.json(filteredArray)
})

module.exports = router;