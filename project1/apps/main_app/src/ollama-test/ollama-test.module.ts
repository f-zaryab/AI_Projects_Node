import { Module } from '@nestjs/common';
import { OllamaTestController } from './ollama-test.controller';
import { OllamaTestService } from './ollama-test.service';

@Module({
  controllers: [OllamaTestController],
  providers: [OllamaTestService],
})
export class OllamaTestModule {}
