const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')

const file = new FileSync('./modals/db.json')
const db = low(file)

//set some defaults

// db.defaults({students: []})
//     .write()

module.exports = db