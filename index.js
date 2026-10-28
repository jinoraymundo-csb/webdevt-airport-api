const express = require("express")
const http = require("http")

const app = express()
app.use(express.json())
const server = http.createServer(app)

// TODO: add more code later

server.listen(3000, () => {
  console.log('Airport API V1 running on port 3000')
})