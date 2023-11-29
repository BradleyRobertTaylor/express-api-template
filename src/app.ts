import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import * as middleware from './middleware';
import api from './routes/api';
config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
