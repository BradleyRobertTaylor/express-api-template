import express from 'express';
import exampleRouter from './example';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from your API',
  });
});

router.use('/example', exampleRouter);

export default router;
