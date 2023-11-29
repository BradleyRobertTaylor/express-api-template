import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../types';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) => {
  const statusCode = res.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
};
