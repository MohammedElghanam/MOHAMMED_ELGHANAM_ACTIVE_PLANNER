import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createImageDto: CreateImageDto, @Res() res: Response, @UploadedFile() file: Express.Multer.File) {
    console.log(createImageDto);
    console.log(file);
    
    
    // return res.status(200).json(CreateImageDto);
    // return this.imageService.create(createImageDto);


  }

}
