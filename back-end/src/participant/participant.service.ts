import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'minio';
import { Model } from 'mongoose';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant } from './schemas/participant.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ParticipantService {

  private readonly minioClient: Client;

  constructor( @InjectModel(Participant.name) private participantModel: Model<Participant> ){
    this.minioClient = new Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });
  }


  async create(createParticipantDto: CreateParticipantDto, file: Express.Multer.File) {
    const bucketName = 'partisipent';
    const image = await this.uploadFile(bucketName, file);

    if (typeof createParticipantDto.events === 'string') {
      createParticipantDto.events = JSON.parse(createParticipantDto.events);
      
    }

    const participantData = {
      ...createParticipantDto,
      image,
    };
    // console.log(participantData);

    const newParticipant = new this.participantModel(participantData);

    return newParticipant.save();
  }

  async findAll() {
    return await this.participantModel.find().exec();
  }

  async update(id: string, updateParticipantDto: UpdateParticipantDto): Promise<Participant> {
    const updatedParticipant = await this.participantModel
      .findByIdAndUpdate(id, updateParticipantDto, { new: true })
      .populate('events', 'name date')
      .exec();

    if (!updatedParticipant) {
      throw new NotFoundException(`Participant with ID "${id}" not found.`);
    }

    return updatedParticipant;
  }

  async remove(id: string) {
    const participant = await this.participantModel.findByIdAndDelete(id);

    if (!participant) {
      throw new NotFoundException(`Participant with ID "${id}" not found.`);
    }

    return {
      message: `Participant with ID ${id} successfully deleted.`
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
