import { Router } from 'express'
import { createSessionHandler, deleteSessionHandler, getSessionHandler } from '../Controllers/session.controller';
import deserializeUser from '../Middleware/deserializerUser';
import { requireUser } from '../Middleware/requireUser';


const jwtRouter = Router();

// middleware
// jwtRouter.use(deserializeUser)

// Login
jwtRouter.post('/api/session', createSessionHandler)

// get the current session
jwtRouter.get('/api/session', deserializeUser, requireUser, getSessionHandler)

// logout

jwtRouter.delete('/api/session', requireUser, deleteSessionHandler)

export default jwtRouter