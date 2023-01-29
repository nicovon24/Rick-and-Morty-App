let axios = require("axios")

async function deleteCreatedChar(res,id){
    fetch(`http://localhost:3001/api/created_chars/${id}`)
        .then(resp=>resp.json())
        .then(data=>{
            if(data) res.status(200).json({success: true});
            else res.status(404).json({success: false});
        })
        .catch(err=>res.status(500).send("error in the fetch"))
}

module.exports = deleteCreatedChar