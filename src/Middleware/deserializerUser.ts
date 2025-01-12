import { getSession } from "../Database/db";
import { signJwt, verifyJwt } from "../Utils/jwt.utils";

const deserializeUser = (req, res, next) => {

    const {accessToken, refreshToken} = req.cookies || {}
    // console.log(req, "RES")
    console.log(req.cookies, "COOOOOOOKKKKKIEEE")
    console.log(accessToken, "ACCESS TOKEN")

   if (!accessToken){
    return next()
    }

    const {payload, expired} = verifyJwt(accessToken)

    //  for a valid access token
    if (payload){
        req.user = payload
        return next()
    }

    //  expired but valid refresh token
    const {payload: refresh} = expired && refreshToken ? verifyJwt(refreshToken) : {payload: null}

    console.log(refresh, "REFRDH")

    if (!refresh){
        return next()
    }

    const session = getSession(refresh.sessionId)
    if (!session){
        return next()
    }

    const newAccessToken = signJwt(session, '5s')

    res.cookie("accessToken", newAccessToken, {
        maxAge: 5000,
        httpOnly: true
    })

    req.user = verifyJwt(newAccessToken).payload
    return next()
    


}

export default deserializeUser