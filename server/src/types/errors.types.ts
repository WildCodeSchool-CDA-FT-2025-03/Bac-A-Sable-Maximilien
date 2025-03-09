export class AppError extends Error {
  code: number;
  status: string;

  constructor(code: number, status: string, message: string) {
    super(message);
    this.code = code;
    this.status = status;
    this.message = message;
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(400, "Bad Request", message);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(404, "Not Found", message);
  }
}
