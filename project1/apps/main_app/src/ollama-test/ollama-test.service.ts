import { Injectable } from '@nestjs/common';
import ollama from 'ollama';
import * as z from 'zod';

@Injectable()
export class OllamaTestService {
  async test(): Promise<Record<string, unknown>> {
    const Country = z.object({
      name: z.string(),
      capital: z.string(),
      languages: z.array(z.string()),
    });

    const response = await ollama.chat({
      model: 'gemma3:latest',
      messages: [{ role: 'user', content: 'Explain about italy' }],
      // format: 'json',
      format: z.toJSONSchema(Country),
    });

    console.log(response.message.content);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(response.message.content);
  }
}
