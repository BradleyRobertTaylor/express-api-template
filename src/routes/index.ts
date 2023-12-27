import express from 'express';
import exampleRoutes from './exampleRoutes';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Hello from your API',
  });
});

router.use('/example', exampleRoutes);

export default router;
