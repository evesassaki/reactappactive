import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";

//import routes
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

// import cookieParser from "cookie-parser";
const app = express();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../../public/upload")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post("/upload", upload.single("file"), (req, res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
})

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_current_password",
    database: "test"
})

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
  }))
// app.use(cookieParser())
app.use("/users", userRoutes)
app.use("/auth", authRoutes)


app.get("/", (req, res)=>{
    res.send("Express here")
})


//mysql vagas

app.get ("/vagas", (req, res)=>{
    const q = "SELECT * FROM vagas"
    db.query(q, (err,data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})

app.post ("/vagas", (req, res)=>{
    const q = "INSERT INTO vagas (`empresa`, `valorhora`, `description`, `local`, `cover`, `folgas`, `turno`, `benefit1`, `benefit2`, `benefit3`, `requirement1`, `requirement2`, `requirement3`, `prize`) VALUES (?)"
    const values = [
        req.body.empresa, 
        req.body.valorhora, 
        req.body.description, 
        req.body.local,
        req.body.cover,
        req.body.folgas,
        req.body.turno,
        req.body.benefit1,
        req.body.benefit2,
        req.body.benefit3,
        req.body.requirement1,
        req.body.requirement2,
        req.body.requirement3,
        req.body.prize
    ];

    db.query(q, [values], (err, data)=>{
        if(err) return res.send(err)
        return res.send("Criado com sucesso!")
    })
})

app.post("/auth/logout", (req, res) => {
    if(err) return res.send(err)
    res.status(200).json("You logged out successfully.");
  });

app.delete("/vagas/:id", (req, res)=>{
    const idvaga = req.params.id;
    const q = "DELETE FROM vagas WHERE idvaga= ?;"
    db.query(q, [idvaga], (err, data)=>{
        if(err) return res.send(err)
        return res.send("Deletado com sucesso!")
    })
})

app.put("/vagas/:id", (req, res)=>{
    const idvaga = req.params.id;
    const q = "UPDATE vagas SET `empresa` = ?, `valorhora` = ?, `description` = ?, `local` = ?, `cover` = ?, `folgas` = ?, `turno` = ?, `benefit1` = ?, `benefit2` = ?, `benefit3` = ?, `requirement1` = ?, `requirement2` = ?, `requirement3` = ?, `prize` = ? WHERE idvaga  = ?"
    const values =[
        req.body.empresa, 
        req.body.valorhora, 
        req.body.description, 
        req.body.local,
        req.body.cover,
        req.body.folgas,
        req.body.turno,
        req.body.benefit1,
        req.body.benefit2,
        req.body.benefit3,
        req.body.requirement1,
        req.body.requirement2,
        req.body.requirement3,
        req.body.prize
    ]


    db.query(q, [...values,idvaga], (err, data)=>{
        if(err) return res.send(err)
        return res.send("Atualizado com sucesso!")
    })
})

//mysql profile info

app.get ("/profile", (req, res)=>{
        const q = `SELECT * FROM userdetails, userfamily, usernihongo, userwork WHERE iduser = ?`
        db.query (q, [], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        })
    })


app.listen(3001, ()=>{
    console.log("Express function is running on port 3001")
})