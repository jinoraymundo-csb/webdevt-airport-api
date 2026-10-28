const express = require("express")
const http = require("http")

const app = express()
app.use(express.json())
const server = http.createServer(app)

const airportModel = require("./airport")

app.route("/airports/")
  .post(async (req, res) => {
    const { code, name, country, isInternational } = req.body
    const response = {}

    try {
      await airportModel.addAirport(code, name, country, isInternational)
      response["message"] = "Airport successfully added"
      res.send(response)
    } catch (error) {
      response["message"] = error.message
      res.status(422).send(response)
    }
  })
  .get(async (req, res) => {
    let { country } = req.query
    let response = {}
    try {
      const airports = await airportModel.searchAirport(country)
      if (airports.length > 0) {
        response = airports
        res.send(response)
      } else {
        response["message"] = "No airports found"
        res.status(404).send(response)
      }
    } catch (error) {
      response["message"] = error.message
      res.status(422).send(response)
    }
  })

app.route("/airports/:code")
  .get(async (req, res) => {})
  .put(async (req, res) => {})
  .delete(async (req, res) => {})


server.listen(3000, () => {
  console.log('Airport API V1 running on port 3000')
})