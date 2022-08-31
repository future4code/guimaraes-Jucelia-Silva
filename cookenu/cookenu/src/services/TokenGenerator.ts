import * as jwt from "jsonwebtoken";
import { authenticationData } from "../model/user";

const expiresIn = "50min"

export default class Authenticator {
    generateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        )
    }

    getData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )

        return tokenData as authenticationData
    }
}