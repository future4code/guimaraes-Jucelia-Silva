import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "5min"

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

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )

        return tokenData as authenticationData
    }
}

/// função que gera o token.