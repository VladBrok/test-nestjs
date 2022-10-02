import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  find(@Param('id') id: number): string {
    return `Returning a cat #${id}`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catService.findAll();
  }
}
