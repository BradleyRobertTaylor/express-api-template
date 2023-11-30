import express from 'express';
import cors from 'cors';

import * as middleware from './middleware';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
