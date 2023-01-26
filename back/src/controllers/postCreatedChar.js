function postCreatedChar(res, body){
    fetch("http://localhost:3001/api/created_char")
        .then(resp=>resp.json())
        .then(data=>{
            let created_char = data
            let newData = body
            console.log(newData)
            res.status(200).send(JSON.stringify({results: [...created_char.results, newData]}));
        })
}

module.exports = {postCreatedChar}