import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createEventDto: CreateEventDto, @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const result = await this.eventService.create(createEventDto, file);

      return res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: 'Failed to create event',
        error: error.message,
      });
    }
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
