// const mongoose = require("mongoose")

// mongoose.connect(`mongodb+srv://<username>:<password>@rickandmorty.up8alzy.mongodb.net`)
//     .then(()=> {
//         console.log("mongo connected")
//     })
//     .catch((err)=> {
//         console.error(err)
//     })

// const userSchema = new mongoose.Schema({
//     uname: String,
//     email: String,
//     password: String,
//     fname: String,
//     lname: String, 
//     gender: String
// }, {collection: "users"})

// const User = mongoose.model("users", userSchema, "users")

// User.find({}).then(result => {
//     console.log(result);
//     mongoose.connection.close()
// })

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