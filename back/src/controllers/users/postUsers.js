let users_data = require("../../utils/users_data.js")

const postUsers = ((res, body)=>{
    let {id, uname, email, password, fname, lname, gender} = body
    if(body){
        let newData = {id, uname, email, password, fname, lname, gender}
        res.status(200).json({sucess: true, results: [...users_data.results, newData]});
    }
    else res.status(404).json({success: false})
})

module.exports = postUsers