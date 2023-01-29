let created_chars = require("../../../utils/created_chars.js")

function postCreatedChar(res, body){
    let {id, name, status, species, origin, gender, image} = body
    if(body){
        let newData = {id, name, status, species, origin, gender, image}
        res.status(200).json({success: true, results: [...created_chars.results, newData]});
    }
    else res.status(404).json({success: false})
}

module.exports = postCreatedChar