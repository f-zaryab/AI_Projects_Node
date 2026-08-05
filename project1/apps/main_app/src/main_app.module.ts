import { Module } from '@nestjs/common';
import { MainAppController } from './main_app.controller';
import { MainAppService } from './main_app.service';
import { OllamaTestModule } from './ollama-test/ollama-test.module';
import { ConfigModule } from '@app/common/config/config.module';

@Module({
  imports: [OllamaTestModule, ConfigModule],
  controllers: [MainAppController],
  providers: [MainAppService],
})
export class MainAppModule {}
