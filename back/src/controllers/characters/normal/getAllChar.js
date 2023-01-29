let axios = require("axios")

let getAllChar = (async(res)=>{
    try{
        let response = await axios.get(`https://rickandmortyapi.com/api/character/`)
        res.status(200).json(response.data)
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = getAllChar