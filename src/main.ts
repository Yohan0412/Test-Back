// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { databaseConfig } from './config/database.config';

// async function bootstrap() {
//   console.log(databaseConfig);
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// // import { databaseConfig } from './config/database.config';
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // URL de votre frontend Angular
  });
  await app.listen(3000);
}
bootstrap();
