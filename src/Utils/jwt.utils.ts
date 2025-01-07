import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()


//sign jwt

export const signJwt = (payload: object, expiresIn: string | number) => {
    return jwt.sign(payload, process.env.PRIVATE_KEY, {algorithm: 'RS256', expiresIn} )

}


//verify jwt

export const verifyJwt = (token: string) => {
    try{
        const decoded = jwt.verify(token, process.env.PUBLIC_KEY )
        return {payload: decoded, expired: false}

    }
    catch(e: unknown) {
        return {payload: null, expired: e.message.include("jwt expired")}


    }
    
}