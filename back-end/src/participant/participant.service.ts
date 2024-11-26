import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant, ParticipantDocument } from './schemas/participant.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ParticipantService {

  constructor( @InjectModel(Participant.name) private participantModel: Model<ParticipantDocument> ){}


  create(createParticipantDto: CreateParticipantDto) {
    const { name, email, events } = createParticipantDto;

    const newParticipant = new this.participantModel({
      name,
      email,
      events,
    });

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
}
