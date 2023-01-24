let getCharById = ((res,id)=>{
    let promise = new Promise((res,rej)=>{
        res(
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(resp=>resp.json())
                .then(data=>data)
        )
    })

    promise.then(data=>{
                if(data.error) res.status(401).send("<h3>Character not found</h3>")
                else res.status(200).json(data)
            })
            .catch(error=>res.status(500).send(error.message))
})

module.exports = {getCharById}