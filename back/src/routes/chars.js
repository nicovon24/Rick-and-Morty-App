const express = require('express')
const getAllChar = require('../controllers/characters/normal/getAllChar')
const getCharById = require('../controllers/characters/normal/getCharById')
const getSearch = require('../controllers/characters/normal/getSearch')
const routerChars = express.Router()

routerChars.get("/", (req,res)=>{ 
    let {page, name} = req.query
    if(!page && !name) getAllChar(res)
    if(page) getSearch(res, "page", page)
    if(name) getSearch(res, "name", name)
})

routerChars.get("/:id", (req,res)=>{ 
    let {id} = req.params
    getCharById(res, id)
})

module.exports = routerChars