import { Test, TestingModule } from '@nestjs/testing';
import { OllamaTestController } from './ollama-test.controller';

describe('OllamaTestController', () => {
  let controller: OllamaTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OllamaTestController],
    }).compile();

    controller = module.get<OllamaTestController>(OllamaTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
