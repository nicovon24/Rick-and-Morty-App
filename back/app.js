const express = require("express")
const app = express()
const cors = require("cors")
const routerHome = require("./src/routes/home.js")
const routerCreatedChars = require("./src/routes/created_chars.js")
const routerChars = require("./src/routes/chars.js")
const routerUsers = require("./src/routes/users.js")

let PORT = 3001
let main_url = `http://localhost:${PORT}/api` 

app.use(cors())
app.use(express.json())

app.use('/api', routerHome)
app.use('/api/detail', routerChars)
app.use("/api/created_chars", routerCreatedChars)
app.use("/api/users", routerUsers)

app.all('*', (req, res) => {
    res.status(404).send('<h3>resource not found</h3>')
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}...`)
    console.log(`Probe with ` + main_url + "...")
})



module.exports = {PORT, main_url}
