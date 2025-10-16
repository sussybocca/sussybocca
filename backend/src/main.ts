import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LogInterceptor } from './common/interceptors/log.interceptor';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.use(cors({ origin: '*' }));

  // Global filters and interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);
  console.log(`Vibro backend running on http://localhost:3000`);
}
bootstrap();
