// import {db} from "../backend/server.js";


export const getUser = (req, res) => {
    const iduser = req.params.iduser;
    const q = "SELECT * FROM users WHERE iduser=?";
  
    db.query(q, [iduser], (err, data) => {
      if (err) return res.status(500).json(err);
      const { password, ...info } = data[0];
      return res.json(info);
    });
  };