import { Controller, Get } from '@nestjs/common';
import { OllamaTestService } from './ollama-test.service';

@Controller('ollama-test')
export class OllamaTestController {
  constructor(private readonly olTService: OllamaTestService) {}

  @Get('/')
  testResponse(): string {
    return this.olTService.test();
  }
}
