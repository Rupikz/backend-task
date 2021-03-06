import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Novotorica')
  .setDescription('Тестовое задание')
  .setVersion('1.0')
  .addTag('users')
  .addTag('auth')
  .addBearerAuth({ in: 'header', type: 'http' })
  .build();
