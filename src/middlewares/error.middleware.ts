import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import {
  ApiError,
  ApiResponse,
  ErrorCode,
  ErrorDetail,
} from '../utils/index.js';

const globalErrorHandler = async (
  error: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode: number = error.statusCode || 500;
  const message: string = error.message || 'Server Error : something went awry';
  const customErrorCode: ErrorCode =
    (error.customErrorCode as ErrorCode) || ErrorCode.UNEXPECTED_ERROR;
  const detail: ErrorDetail[] | undefined = error.detail as
    | ErrorDetail[]
    | undefined;
  res
    .status(statusCode)
    .json(new ApiResponse(statusCode, message, {}, customErrorCode, detail));
  console.error(error);
};

export { globalErrorHandler };
