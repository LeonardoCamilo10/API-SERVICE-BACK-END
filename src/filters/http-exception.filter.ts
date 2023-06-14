import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  nameErrors(name: string) {
    switch (name) {
      case 'NotFoundException':
        return 'Not Found';
      case 'BadRequestException':
        return 'Bad Request';
      default:
        break;
    }
  }
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    const error = this.nameErrors(exception.name);

    response.status(status).json({
      statusCode: status,
      message: message,
      error: error,
    });
  }
}
