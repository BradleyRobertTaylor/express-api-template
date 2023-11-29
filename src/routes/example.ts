import express from 'express';
import { getExample } from '../controllers/exampleController';

const exampleRouter = express.Router();

exampleRouter.get('/', getExample);

export default exampleRouter;
