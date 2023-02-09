let users_data = require("../../utils/users_data")

const postUsers = ((res, body)=>{
    let {id, uname, email, password, fname, lname, gender} = body
    if(body){
        let newData = {id, uname, email, password, fname, lname, gender}
        res.status(200).json({sucess: true, results: [...users_data.results, newData]});
    }
    else res.status(404).json({success: false})
})

function deleteUser(res,id){
    fetch(`http://localhost:3001/api/users/${id}`)
        .then(resp=>resp.json())
        .then(data=>{
            if(data) res.status(200).json({success: true});
            else res.status(404).json({success: false});
        })
        .catch(err=>res.status(404).json({success: false}))
}

module.exports = {postUsers, deleteUser}
