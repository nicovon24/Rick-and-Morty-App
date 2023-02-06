const express = require("express")
const app = express()
const cors = require("cors")
const routerHome = require("./src/routes/home.js")
const routerCreatedChars = require("./src/routes/created_chars.js")
const routerChars = require("./src/routes/chars.js")
const routerUsers = require("./src/routes/users.js")
const mongoose = require("mongoose")

let PORT = 3001
let main_url = `http://localhost:${PORT}/api` 

mongoose.connect(`mongodb+srv://nicovon24:Nico110500@rickandmorty.up8alzy.mongodb.net`)
    .then(()=> {
        console.log("mongo connected")
    })
    .catch((err)=> {
        console.error(err)
    })

const userSchema = new mongoose.Schema({
    uname: String,
    email: String,
    password: String,
    fname: String,
    lname: String, 
    gender: String
}, {collection: "users"})

const User = mongoose.model("users", userSchema, "users")

User.find({}).then(result => {
    console.log(result);
    mongoose.connection.close()
})

// async function saveUser(){
//     try{
//         const user = new User({uname: "Fervon96", email: "fer@gmail.com", password: "Fer1234Fer", fname: "Fer", lname: "Von", gender: "Female"})
//         await user.save() //guardando en base de datos
//         // let users = mongoose.connection.db.collection("users")
//         mongoose.connection.close()
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// saveUser()

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
