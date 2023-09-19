import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('miaplay - server')
    .setDescription('')
    .setVersion('2.0.0')
    .addTag('status')
    .addTag('genres')
    .addTag('games')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api-docs', app, swaggerDocument);

  app.enableCors({
    origin: ['https://miaplay.vercel.app/', 'http://localhost:3000/'],
  });

  app.enableShutdownHooks();

  await app.listen(port);
}
bootstrap();
