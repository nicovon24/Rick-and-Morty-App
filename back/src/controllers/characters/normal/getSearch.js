let axios = require("axios")

let getSearch = (async (res, query, result)=>{
    try{
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?${query}=${result}`)
        res.status(200).json(response.data)
    }
    catch(err){
        res.status(500).send("<h3>None characters found</h3>")
    }
})

module.exports = getSearch