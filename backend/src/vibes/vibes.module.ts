import { Module } from '@nestjs/common';
import { VibesService } from './vibes.service';
import { VibesController } from './vibes.controller';

@Module({
  providers: [VibesService],
  controllers: [VibesController],
})
export class VibesModule {}
