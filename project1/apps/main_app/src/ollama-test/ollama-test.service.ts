import { Injectable } from '@nestjs/common';

@Injectable()
export class OllamaTestService {
  test(): string {
    return 'ollama module testing!';
  }
}
