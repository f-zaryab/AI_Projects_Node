import { Module } from '@nestjs/common';
import { LangchController } from './langch.controller';
import { LangchService } from './langch.service';

@Module({
  controllers: [LangchController],
  providers: [LangchService],
})
export class LangchModule {}
