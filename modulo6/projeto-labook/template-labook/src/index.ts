import { app } from "./controller/app"
import { Request, Response} from 'express'
import { userRouter } from './controller/routes/UserRouter'
import { postRouter } from "./controller/routes/postRouter"


app.use("/user", userRouter)
app.use("/post", postRouter)

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé! 👣");
  });