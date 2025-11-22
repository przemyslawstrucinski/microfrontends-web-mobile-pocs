import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Patch(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.todoService.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.todoService.delete(id);
    return { success: true };
  }
}

