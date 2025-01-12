import { Request, Response} from 'express'
import { getUser, createSession } from '../Database/db'
import { signJwt, verifyJwt, } from '../Utils/jwt.utils'

// Logging in

export const createSessionHandler = (req: Request, res: Response) => {
    const { email, password } = req?.body
    const user = getUser(email)
    if (!user || user.password !== password){
        return res.status(401).send("Invalid email or password")
    }

    const session = createSession(email, user.name )
    // create access token

    const accessToken = signJwt({email: user.email,name: user.name, sessionId: session.sessionId}, '5s')
    const refreshToken = signJwt({sessionId: session.sessionId}, '1y')

    // set access token in cookie

    res.cookie('accessToken', accessToken, {
        maxAge: 5000, // 5 minutes
        httpOnly: true
    })
    res.cookie('refreshToken', refreshToken, {
        maxAge: 3.154e10, // 1y
        httpOnly: true
    })

    // send user back

    res.send(session);
    




}

// Get the session

export const getSessionHandler = (req:Request, res:Response) => {

    res.send(req.user).status(200)
    
}
// Loutgout handler

export const deleteSessionHandler = (req, res) => {
    console.log("DID THIS RUN INSIDE DELETE")
    res.cookie("accessToken", "", {
        maxAge: 0,
        httpOnly: true
    })
    res.cookie("refreshToken", "", {
        maxAge: 0,
        httpOnly: true
    })
    return res.send({success: true})
}