import knex from 'knex'
import { connection } from '../connection'

const userTableName = "UsersTableName"

export const createUserTable = async (id: string, email: string, password: string) => {
    
    await connection
        .insert({
            id,
            email,
            password
        })
        .into(userTableName)
};