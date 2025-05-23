import Joi from 'joi';
const enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
  ACCOUNT_DISABLED = 'ACCOUNT_DISABLED',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  TOKEN_MISSING = 'TOKEN_MISSING',
  INVALID_REFRESH_TOKEN = 'INVALID_REFRESH_TOKEN',
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
  DATA_NOT_FOUND_ERROR = 'DATA_NOT_FOUND_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  EMAIL_USERNAME_CLASH = 'EMAIL_USERNAME_CLASH',
  ALREADY_EXISTS = 'ALREADY_EXISTS',
}


interface ErrorDetail {
  field: string;
  message: string;
}

function formatJoiErrors(error: Joi.ValidationError) {
  if (!error || !error.details) return [];

  return error.details.map((err) => ({
    field: err.path.join('.'),
    message: err.message,
  }));
}

export { ErrorCode, formatJoiErrors, ErrorDetail };
