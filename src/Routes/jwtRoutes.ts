import { Router } from 'express'
import { createSessionHandler } from '../Controllers/session.controller';


const jwtRouter = Router();

// Login
// get the current session
// logout

jwtRouter.post('/api/session', createSessionHandler)

export default jwtRouter