import { Module } from '@nestjs/common';
import { YesNoController } from './yes-no.controller';
import { YesNoService } from './yes-no.service';

@Module({
  controllers: [YesNoController],
  providers: [YesNoService],
})
export class YesNoModule {}
