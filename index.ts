import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/error";

const app = express();

app.use(cors({
    origin: 'https://localhost:3000',
}))
app.use(json());

//Routes

app.get('/', async (req, res) => {
    throw new Error('Damn!');
});

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001')
})