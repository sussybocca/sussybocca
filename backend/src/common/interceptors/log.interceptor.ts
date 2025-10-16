import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Request...');
    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`Response after ${Date.now() - now}ms`))
    );
  }
}
