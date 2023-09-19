import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://miaplay.vercel.app/', 'http://localhost:3000/'],
  });

  app.enableShutdownHooks();

  await app.listen(port);
}
bootstrap();
