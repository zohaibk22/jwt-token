import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { routes } from './Routes';
 

export const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))


app.use("", routes)