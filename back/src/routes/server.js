const express = require("express")
const server = express()
const cors = require('cors');
const {created_data} = require("../utils/created_data.js")
const {getCharById} = require("../controllers/getCharById.js")
const {getAllChar} = require("../controllers/getAllChar.js")
const {getSearch} = require("../controllers/getSearch.js")
const {postCreatedChar} = require("../controllers/postCreatedChar.js");
let bodyParser = require("body-parser");

let PORT = 3001
let main_url = `http://localhost:${PORT}/api` 

server.get("/api", (req, res)=>{
    res.status(200).json({
        characters: main_url + "/rickandmorty/detail",
        characters_search_by_page: main_url + "/rickandmorty/detail/?page=1",
        characters_search_by_name: main_url + "/rickandmorty/detail/?name=rick&sanchez",
        created_characters: main_url + "/created_char",
        created_characters_by_id: main_url + "/created_char/?id=1000" 
    })
})

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "300mb" }));
server.use(bodyParser.json({ limit: "300mb" }));

server.get("/api/rickandmorty/detail", (req,res)=>{ 
    let {page, name} = req.query
    if(!page && !name) getAllChar(res)
    if(page) getSearch(res, "page", page)
    if(name) getSearch(res, "name", name)
})

server.get("/api/rickandmorty/detail/:id", (req,res)=>{ 
    let {url} = req
    let arrURL = url.split("/")
    let id = arrURL[arrURL.length-1]
    getCharById(res, id)
})

server.get("/api/created_char", (req,res)=>{ 
    let {id} = req.query
    console.log(req.body)
    if(!id) res.status(200).send(created_data)
    else{ 
        let data = Object.entries(created_data.results).filter(el=>el[1].id===Number(id))
        if(data.length>0) {
            data = {[data[0][0]]: data[0][1]} //***haciendo que quede de vuelta como obj
            let person = {counter: created_data.counter, results: data}
            res.status(201).json(person)
        } else{
            res.status(401).send("<h3>Character not found</h3>")
        }
        
    }
})

server.post('/api/created_char',(req, res) => {
    postCreatedChar(res, req.body)
});


server.all('*', (req, res) => {
    res.status(404).send('<h3>resource not found</h3>')
})

server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
    console.log(`Probe with ` + main_url + "...")
})
