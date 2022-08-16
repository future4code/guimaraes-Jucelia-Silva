import  UserController  from "./controller/UserController"
import app from "./app";

const userController = new UserController()

app.post('/createUser', userController.createUser)

app.get('/all', userController.getAllUsers)

/* */
app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});
