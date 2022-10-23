import { InputTask } from "../types/types";
import { BaseDatabase } from "./BaseDataBase";

export class TaskDataBase extends BaseDatabase {
    private static TABLE_NAME = "teppa_todolist"

   
    public async createTask(id: string, title: string, status: string): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    title,
                    status
                })
                .into(TaskDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    
    public async getTasks(): Promise<any> {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(TaskDataBase.TABLE_NAME)
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

   
    public async editTaskById(id: string, title: string, status: string): Promise<any> {
        try {
            await TaskDataBase.connection(TaskDataBase.TABLE_NAME)
                .update({
                    title,
                    status
                })
                .where({ id })

            const task = await TaskDataBase.connection(TaskDataBase.TABLE_NAME)
                .select('*')
                .where({ id })
            return task
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    

    
    public async deleteTaskById(id: string): Promise<any> {
        try {
            await TaskDataBase.connection(TaskDataBase.TABLE_NAME)
                .delete()
                .where({ id })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    
    async findTask(id: string) {
        try {
            const task = await TaskDataBase.connection(TaskDataBase.TABLE_NAME)
                .select()
                .where({ id })
            return task;
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

    
    async verifyTask(task: InputTask) {
        try {
            const verifyTask = await TaskDataBase.connection(TaskDataBase.TABLE_NAME)
                .select()
                .where({ title: task.title, status: task.status })
            return verifyTask;

        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }
}