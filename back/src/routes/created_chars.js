const express = require('express')
const deleteCreatedChar = require('../controllers/characters/created/deleteCreatedChar')
const postCreatedChar = require('../controllers/characters/created/postCreatedChar')
const routerCreatedChars = express.Router()
const created_chars = require ("../utils/created_chars.js")

routerCreatedChars.get("/", (req,res)=>{ 
    res.status(200).send(created_chars)
})

routerCreatedChars.post('/',(req, res) => {
    postCreatedChar(res, req.body)
});

routerCreatedChars.get('/:id',(req, res) => {
    let {id} = req.params
    let data = created_chars.results.find(el=>el.id===Number(id))
    if(data) res.status(200).json(data)
    else res.status(404).json({error: "character not created"})
});

routerCreatedChars.delete('/:id',(req, res) => {
    let {id} = req.params
    deleteCreatedChar(res, id)
});

module.exports = routerCreatedChars