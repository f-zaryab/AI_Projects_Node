import { Injectable } from '@nestjs/common';
import ollama, { Message } from 'ollama';
import { toolDefinitions } from './data/user-data-definations';
import { userDataRegistry } from './data/user-data-registry';

@Injectable()
export class OllamaToolingService {
  async informationAboutJohn() {
    const messages: Message[] = [
      {
        role: 'user',
        content: 'Tell me age of John Farooqui and his first job.',
      },
    ];

    // 1. Ask model which tool it needs
    const response = await ollama.chat({
      model: 'qwen3:latest',
      messages,
      tools: toolDefinitions,
    });

    // console.dir(response.message.tool_calls, {
    //   depth: null,
    // });
    // console.dir(response.message, {
    //   depth: null,
    // });

    // Add assistant's tool-call request to conversation
    messages.push(response.message);

    // 2. Execute requested tools
    for (const toolCall of response.message.tool_calls ?? []) {
      const toolName = toolCall.function.name;

      const tool = userDataRegistry[toolName as keyof typeof userDataRegistry];

      if (!tool) {
        throw new Error(`Unknown tool: ${toolName}`);
      }

      const result = tool();

      // console.log('Tool result:', result);

      messages.push({
        role: 'tool',
        tool_name: toolName,
        content: JSON.stringify(result),
      });
    }

    console.dir(messages, { depth: null });

    // 4. Ask model to answer original question
    const finalResponse = await ollama.chat({
      model: 'qwen3:latest',
      messages,
      tools: toolDefinitions,
    });

    return finalResponse.message.content;
  }
}
