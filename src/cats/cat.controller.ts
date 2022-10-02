import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ValidationPipe } from 'src/validation.pipe';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Deleting a cat #${id}`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number): string {
    return `Returning a cat #${id}`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    return await this.catService.findAll();
  }
}
