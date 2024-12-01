import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Client } from 'minio';

@Injectable()
export class ImageService {

  private readonly minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: 'localhost', 
      port: 9000, 
      useSSL: false, 
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });
  }

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  
}
