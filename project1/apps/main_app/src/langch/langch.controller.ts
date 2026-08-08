import { Controller, Get } from '@nestjs/common';
import { LangchService } from './langch.service';

@Controller('langch')
export class LangchController {
  constructor(private readonly langchService: LangchService) {}

  @Get('/invoke')
  async InvokeChat() {
    const data = await this.langchService.chat();

    return {
      success: true,
      data: data,
    };
  }
}
