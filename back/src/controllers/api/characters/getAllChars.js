const express = require('express')
const {Character} = require("../../../db/db.js")


const getAllChars = async (req,res)=>{ 
    try{
        const characters = await Character.findAll()
        return characters
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = getAllChars