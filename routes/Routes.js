const express = require("express")
const Route = express.Router()
const {getAllRecords, addRecords} = require("../controller/records")

// Route.get("/", getIndexHtml)

Route.get("/getallrecords", getAllRecords)

Route.post("/addrecords", addRecords)

module.exports = Route