const express = require("express")
const app = express()

const Route = require("./routes/Routes")

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use("/api", Route)

const port = process.env.PORT || 3000

app.listen(port, () => console.log("server started"))

