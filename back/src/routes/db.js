const express = require('express')
const getAllChars = require('../controllers/api/characters/getAllChars.js')
const {Character} = require('../../db.js')
const routerDB = express.Router()

routerDB.get("/", async (req,res)=>{ 
    try{
        const characters = await getAllChars()
        res.status(200).json(characters)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = routerDB