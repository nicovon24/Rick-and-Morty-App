const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://nicovon24:Nico110500@rickandmorty.up8alzy.mongodb.net`, {useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true})
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

const User = mongoose.model("User", userSchema, "users")

async function saveUser(){
    try{
        const user = new User({uname: "Fervon96", email: "fer@gmail.com", password: "Fer1234Fer", fname: "Fer", lname: "Von", gender: "Female"})
        await user.save()
        let users = mongoose.connection.db.collection("users")
        console.log(users);
    }
    catch(err){
        console.log(err.message);
    }
}

saveUser()