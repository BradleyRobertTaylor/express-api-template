import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

export const getExample = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'This is an example route' });
  },
);
