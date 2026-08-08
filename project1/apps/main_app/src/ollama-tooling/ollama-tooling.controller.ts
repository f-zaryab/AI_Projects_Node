import { Controller, Get } from '@nestjs/common';
import { OllamaToolingService } from './ollama-tooling.service';

@Controller('ollama-tooling')
export class OllamaToolingController {
  constructor(private readonly olTooling: OllamaToolingService) {}

  @Get()
  async inforAboutJohn() {
    const data = await this.olTooling.informationAboutJohn();

    return {
      success: true,
      data,
    };
  }
}
