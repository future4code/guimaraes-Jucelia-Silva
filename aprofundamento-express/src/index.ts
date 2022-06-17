import express from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())



app.get("/", function (req, res){
    res.send("Página inicial")
})

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")    
})


