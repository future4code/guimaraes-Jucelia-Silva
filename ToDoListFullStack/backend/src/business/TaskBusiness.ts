import { TaskDataBase } from "../data/TaskDataBase";
import Authenticator from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { InputTask } from "../types/types";

export class TaskBusiness {

    async createTask(task: InputTask) {
        try {

            if (!task.title || !task.status) {
                throw new Error("Please, fill all the fields!")
            }

            const id = generateId()
           

            const newTask = new TaskDataBase()
            await newTask.createTask(id, task.title, task.status)

            return newTask
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getTaskByTitle() {
        try {
            const task = await new TaskDataBase().getTasks()

            if (!task) {
                throw new Error("Please, enter the task you want to search!")
            }

        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }


    async updateTaskById(id: string, title: string, description: string) {
        try {
          
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

          
            if (!title || !description) {
                throw new Error('Please, fill in all the fields!')
            }


           
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            }

           
            const updateTask = await new TaskDataBase().editTaskById(id, title, description)
            return updateTask;


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async deleteTask(id: string) {
        try {
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

            
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            }

          
            await new TaskDataBase().deleteTaskById(id)
            return task;


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getTaskById(id: string) {
        try {
            if (!id) {
                throw new Error('Please, you need to fill the parameter ID!')
            }

           
            const task = await new TaskDataBase().findTask(id)

            if (!task) {
                throw new Error('Task not found!')
            } else {
                return task;
            }

        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

}