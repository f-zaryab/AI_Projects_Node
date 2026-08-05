import { NestFactory } from '@nestjs/core';
import { MainAppModule } from './main_app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(MainAppModule);

  // Config
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<number>('PORT') ?? 3000;

  await app.listen(port);
}

void bootstrap();
