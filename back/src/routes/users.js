const express = require('express')
const routerUsers = express.Router()
const users_data = require("../utils/users_data.js")
const postUsers = require("../controllers/users/postUsers")
const deleteUser = require("../controllers/users/deleteUser.js")

routerUsers.get("/", (req,res)=>{
    res.status(200).json(users_data)
})

routerUsers.get("/:id", (req,res)=>{
    let {id} = req.params
    let data = users_data.results.find(user=>user.id===Number(id))
    if(data) res.status(200).json(data)
    else res.status(404).send("<h3>user not found</h3>")
})

routerUsers.post("/", (req,res)=>{
    postUsers(res, req.body)
})

routerUsers.delete("/:id", (req,res)=>{
    let {id} = req.params
    deleteUser(res, id)
})

module.exports = routerUsers