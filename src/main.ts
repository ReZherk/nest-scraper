import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 App running on http://localhost:${port}`);
  console.log(`📖 Swagger docs available at http://localhost:${port}/api`);
}
bootstrap()
  .then(() => {
    console.log('Aplicación iniciada correctamente');
  })
  .catch((err) => {
    console.error('Error al iniciar la aplicación', err);
  });
