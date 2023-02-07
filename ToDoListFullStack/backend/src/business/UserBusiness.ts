import { InputUser, UserLogin } from './../types/types';
import { HashManager } from './../services/hashManager';
import { UserDataBase } from './../data/UserDataBase';
import Authenticator from '../services/authenticator';
import { generateId } from '../services/idGenerator';
export class UserBusiness {

    async createUser(user: InputUser) {
        try {
            if (!user.email || !user.password) {
                throw new Error("Please, fill all the fields!")
            }
             
            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email!")
            }
          
            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters!")
            }
             
            const id = generateId();
          
            const newHash = new HashManager()
            const hashPassword = newHash.createHash(user.password)
            

            const newUserDataBase = new UserDataBase()
            await newUserDataBase.createUser(id, user.email, hashPassword);
          
            const token = new Authenticator().generateToken({
                id: id
            })
            
            return token
        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }


    async login(user: UserLogin) {
        try {

            const userData = {
                email: user.email,
                password: user.password
            };

            const loginUser = await new UserDataBase().login(userData.email);
            console.log(loginUser)
            const hashManager: HashManager = new HashManager()

            const compareResult = hashManager.compareHash(
                userData.password,
                loginUser.password
            );
          

            if (!compareResult) {
                throw new Error("Invalid credentials!");
            }
          

            const newAuthenticator = new Authenticator()
            const token = newAuthenticator.generateToken({
                id: loginUser.id
            })

            return token

        } catch (error: any) {
            throw new Error(error.message || "Error to login. Please check your system administrator.");
        }
    }

}