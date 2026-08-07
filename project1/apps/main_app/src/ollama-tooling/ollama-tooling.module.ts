import { Module } from '@nestjs/common';
import { OllamaToolingController } from './ollama-tooling.controller';
import { OllamaToolingService } from './ollama-tooling.service';

@Module({
  controllers: [OllamaToolingController],
  providers: [OllamaToolingService],
})
export class OllamaToolingModule {}
