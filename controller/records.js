const db = require("../modals/database")

// const getIndexHtml = (req, res) => {

//     res.sendFile(path.resolve(__dirname, "../views/index.html"))

// }

const getAllRecords = (req, res) => {
    let allRecords = db.get("records").value()
    res.json(allRecords)
}

const addRecords = (req,res) => {
    console.log(req.body)

    db.get("records").push(req.body).write()

    let allRecords = db.get("records").value()
    res.json(allRecords)
}

module.exports = {getAllRecords, addRecords}