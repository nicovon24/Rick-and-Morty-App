const axios = require("axios")
const {Character} = require("../../../db/db.js")

const getApiData = async (res)=>{
    try{
        let arrCharacters = []

        for(let i = 1; i <= 5; i++){
            const response = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)

            const data = response.data.results

            let map = data.map(char=>{
                let {id, name, status, species, gender, origin, image} = char
                return {id, name, status, species, gender, origin, image}
            })

            arrCharacters = [...map]
        }

        // console.log(arrCharacters);

        return arrCharacters
    }
    catch(err){
        res.status(500).send(err)
    }
}

const saveApiData = async ()=>{
    try {
        const allCharacters = await getApiData();
        const createCharacters = await Character.create(allCharacters);
        return createCharacters
        //bulkCreate nos permite pasarle un array de objetos y los crea juntos en la DB
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = {getApiData, saveApiData}