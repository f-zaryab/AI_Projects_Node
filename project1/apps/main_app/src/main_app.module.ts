import { Module } from '@nestjs/common';
import { MainAppController } from './main_app.controller';
import { MainAppService } from './main_app.service';
import { OllamaTestModule } from './ollama-test/ollama-test.module';
import { ConfigModule } from '@app/common/config/config.module';
import { OllamaToolingModule } from './ollama-tooling/ollama-tooling.module';

@Module({
  imports: [OllamaTestModule, ConfigModule, OllamaToolingModule],
  controllers: [MainAppController],
  providers: [MainAppService],
})
export class MainAppModule {}
