let axios = require("axios")

let getCharById = (async (res,id)=>{
    try{
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        res.status(200).json(response.data)
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = getCharById