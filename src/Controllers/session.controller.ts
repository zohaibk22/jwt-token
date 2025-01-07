import { Request, Response} from 'express'
import { getUser } from '../Database/db'
import { signJwt, verifyJwt } from '../Utils/jwt.utils'
// Logging in

export const createSessionHandler = (req: Request, res: Response) => {
    const { email, password } = req?.body
    
    const user = getUser(email)
    if (!user || user.password !== password){
        return res.status(401).send("Invalid email or password")
    }

    // create access token

    const accessToken = signJwt({email: user.email,name: user.name}, '1h')

    // set access token in cookie

    res.cookie('accessToken', accessToken, {
        maxAge: 30000,
        httpOnly: true
    })

    // send user back

    res.send(verifyJwt(accessToken).payload);
    




}



// Get the session
// Loutgout handler

