let getAllChar = ((res)=>{
    let promise = new Promise((res,rej)=>{
        res(
            fetch(`https://rickandmortyapi.com/api/character/`)
                .then(resp=>resp.json())
                .then(data=>data)
        )
    })

    promise
        .then(data=>res.status(200).json(data))
        .catch(error=>res.status(500).send(error.message))
})

module.exports = {getAllChar}