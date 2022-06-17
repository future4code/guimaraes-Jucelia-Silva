import express from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type user = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}


const users:user[] = [
    {
        id: 1,
        name: "Luciana Pardo",
        phone:1199405234,
        email: "luciana@email.com",
        website: "luciana.dev.com",
    },
    {
        id: 2,
        name: "Pamela Silva",
        phone:5599382245,
        email: "pamela@email.com",
        website: "pamela.dev.com",
    }
    
]

app.get("/users", (req, res) => {
    if(!users.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(users)
}) 
type post = {
    id: number | string,
    title: string,
    body: string,
    userId: number | string
}

const posts:post[] = [
    {
        id: "01",
        title: "Novela",
        body: "O Que A Vida Me Roubou",
        userId: 1
    },
    {
        id: "02",
        title: "série",
        body: "Once Upon a Time ",
        userId: 2
    }

]

app.get("/posts", (req, res) => {
    if(!posts.length){
        res.status(401).send("Vazio")
}
    res.status(201).send(posts)
})

app.listen(3003, () => {
    console.log('Servidor rodando url http://localhost:3003');
})