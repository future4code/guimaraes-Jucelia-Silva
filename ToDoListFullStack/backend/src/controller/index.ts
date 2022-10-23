import { UserController } from './UserController';
import app from './app'
import { TaskController } from './TaskController';


const taskController = new TaskController()


app.post('/task', taskController.createTask)

app.get('/tasks', taskController.getTasks)

app.put('/task/:id', taskController.editTaskById)

app.delete('/task/:id',  taskController.deleteTaskById)

app.get('/gettask/:id', taskController.getTaskById)


const userController = new UserController()

app.post('/user', userController.signup)

app.post('/login', userController.login)