import { Injectable } from '@nestjs/common';
import langchainModels from './lang_models';
import {
  AIMessageChunk,
  MessageStructure,
  MessageToolSet,
} from '@langchain/core/messages';

@Injectable()
export class LangchService {
  async chat(): Promise<AIMessageChunk<MessageStructure<MessageToolSet>>> {
    const model = langchainModels('ollama');
    const response = await model.invoke('Why do parrots talk?');

    return response;
  }
}
