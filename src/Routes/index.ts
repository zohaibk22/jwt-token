import express from 'express';
import jwtRouter from './jwtRoutes'

export const routes = express.Router()
routes.use(jwtRouter)