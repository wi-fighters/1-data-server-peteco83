const express = require("express")
const Route = express.Router()
const {getAllRecords, addRecords} = require("../controller/records")

// Route.get("/", getIndexHtml)

Route.get("/records", getAllRecords)

Route.post("/records", addRecords)

module.exports = Route