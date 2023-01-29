function deleteUser(res,id){
    fetch(`http://localhost:3001/api/users/${id}`)
        .then(resp=>resp.json())
        .then(data=>{
            if(data) res.status(200).json({success: true});
            else res.status(404).json({success: false});
        })
        .catch(err=>res.status(404).json({success: false}))
}

module.exports = deleteUser