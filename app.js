const express = require("express")
// const {middleware} = require("./middleware/middleware")

const app = express()

// app.use(express.static("views"))

const Route = require("./routes/Routes")

app.use(express.json())

app.use(express.urlencoded({extended: false}))

// app.use(middleware)
app.use("/", Route)

const port = process.env.PORT || 3000

app.listen(port, () => console.log("server started"))

