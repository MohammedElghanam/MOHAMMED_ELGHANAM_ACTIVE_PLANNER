import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'minio';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService {

  private readonly minioClient: Client;

  constructor(@InjectModel(Event.name) private eventModel: Model<Event>){
    this.minioClient = new Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });
  }



  async create(createEventDto: CreateEventDto, file: Express.Multer.File): Promise<Event> {
    const bucketName = 'event';
    const image = await this.uploadFile(bucketName, file);

    if (typeof createEventDto.participants === 'string') {
      createEventDto.participants = JSON.parse(createEventDto.participants);     
    }

    const eventData = {
      ...createEventDto,
      image,
    };

    console.log(eventData);
    
    const newEvent = new this.eventModel(eventData);
  
    return await newEvent.save();
  }

  async findAll() {
    return await this.eventModel.find().exec();
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const updatedEvent = await this.eventModel
      .findByIdAndUpdate(id, updateEventDto, { new: true })
      .exec();

    if (!updatedEvent) {
      throw new NotFoundException(`Event with ID "${id}" not found.`);
    }

    return updatedEvent;
  }

  async remove(id: string) {
    const participant = await this.eventModel.findByIdAndDelete(id);

    if (!participant) {
      throw new NotFoundException(`Event with ID "${id}" not found.`);
    }

    return {
      message: `Event with ID ${id} successfully deleted.`
    }
  }

  async uploadFile(bucketName: string, file: Express.Multer.File): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`; 

    const exists = await this.minioClient.bucketExists(bucketName);
    if (!exists) {
      await this.minioClient.makeBucket(bucketName, 'eu-west-1');
      console.log(`Bucket ${bucketName} created`);
    }

    await this.minioClient.putObject(
      bucketName,
      fileName,
      file.buffer,
      file.size,
      { 'Content-Type': file.mimetype },
    );

    return `http://localhost:9000/${bucketName}/${fileName}`;
  }

}
