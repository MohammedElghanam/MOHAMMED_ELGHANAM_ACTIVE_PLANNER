import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createParticipantDto: CreateParticipantDto, @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      const result = await this.participantService.create(createParticipantDto, file);

      return res.status(201).json({
        success: true,
        message: 'Participant created successfully',
        data: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: 'Failed to create participant',
        error: error.message,
      });
    }
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
    return this.participantService.update(id, updateParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantService.remove(id);
  }
}
