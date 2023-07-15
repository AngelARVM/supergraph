import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3002;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port).then(() => {
    console.log(`server is running at http://localhost:${port}/graphql`);
  });
}
bootstrap();
