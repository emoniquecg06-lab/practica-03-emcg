import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
}));
 

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Materias')
    .setDescription('API publica para el sistema de materias ofertadas.')
    .setVersion('1.0')
    .addTag('materia')
    .addBearerAuth()            // agrega autenticación con token, JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();