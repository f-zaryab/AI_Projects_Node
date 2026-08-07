import { Controller, Get } from '@nestjs/common';
import { OllamaToolingService } from './ollama-tooling.service';

@Controller('ollama-tooling')
export class OllamaToolingController {
  constructor(private readonly olTooling: OllamaToolingService) {}

  @Get()
  test(): string {
    return this.olTooling.test();
  }
}
