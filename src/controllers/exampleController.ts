import { NextFunction, Request, Response } from 'express';

export const getExample = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: 'This is an example route' });
  } catch (err: unknown) {
    next(err);
  }
};
