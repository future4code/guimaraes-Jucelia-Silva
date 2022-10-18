import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.DB_port || 3306, ()=>{
    console.log(`Server is online on port ${process.env.DB_Port || 3306}`)
})

export default app;