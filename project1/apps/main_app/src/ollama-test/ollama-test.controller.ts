import { Controller, Get } from '@nestjs/common';
import { OllamaTestService } from './ollama-test.service';

@Controller('ollama-test')
export class OllamaTestController {
  constructor(private readonly olTService: OllamaTestService) {}

  @Get('/')
  async testResponse() {
    const data = await this.olTService.test();

    return {
      success: true,
      data,
    };
  }
}
