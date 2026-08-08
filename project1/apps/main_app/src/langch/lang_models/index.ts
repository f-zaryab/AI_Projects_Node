import { ChatOllama } from '@langchain/ollama';
import { ChatOpenAI } from '@langchain/openai';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

export type LangChainModelOption = 'google-gemini' | 'open-ai' | 'ollama';

const langchainModels = (modelName: LangChainModelOption): BaseChatModel => {
  switch (modelName) {
    case 'open-ai':
      return new ChatOpenAI({
        model: 'gpt-5.5',
        temperature: 0.8,
        maxTokens: 700,
        apiKey: process.env.OPENAI_API_KEY,
      });

    case 'ollama':
      return new ChatOllama({
        model: 'qwen3:latest',
        temperature: 0,
      });

    case 'google-gemini':
      return new ChatGoogleGenerativeAI({
        model: 'gemini-3-flash-preview',
        apiKey: process.env.GOOGLE_API_KEY,
      });

    default: {
      const exhaustiveCheck: never = modelName;
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unsupported model: ${exhaustiveCheck}`);
    }
  }
};

export default langchainModels;
