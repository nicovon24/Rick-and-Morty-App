const express = require('express')
const routerHome = express.Router()

let PORT = 3001
let main_url = `http://localhost:${PORT}/api` 

routerHome.get("/", (req, res)=>{
    res.status(200).json({
        characters: {
                characters: {
                    all: main_url + "/detail", 
                    by_char: main_url + "/detail/1"
                },
                characters_query: {
                    by_page: main_url + "/detail/?page=1",
                    by_name: main_url + "/detail/?name=rick&sanchez",
                },
                created_characters:{
                    all: main_url + "/created_chars",
                    by_id: main_url + "/created_chars/1000"
                }
            },
        users: {
            users: {
                all: main_url + "/users",
                by_user: main_url + "/users/1",
            }
        }
    })
})

module.exports = routerHome