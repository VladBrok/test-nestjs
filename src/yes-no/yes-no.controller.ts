import { Controller, Get } from '@nestjs/common';
import { YesNoDto } from './dto/yes-no.dto';
import { YesNoService } from './yes-no.service';

@Controller('yes-no')
export class YesNoController {
  constructor(private readonly yesNoService: YesNoService) {}

  @Get()
  getAnswer(): YesNoDto {
    return this.yesNoService.getAnswer();
  }
}
