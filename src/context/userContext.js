import {db} from "../backend/server.js";
    
export const userData = (req, res) =>{
    const q = `SELECT * FROM userdetails, userfamily, usernihongo, userwork WHERE iduser = ?`
    db.query (q, (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}
console.log(userData);