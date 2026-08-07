import { Injectable } from '@nestjs/common';

@Injectable()
export class OllamaToolingService {
  test(): string {
    return 'ollama tooling';
  }
}
