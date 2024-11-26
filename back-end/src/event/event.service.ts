import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService {

  constructor(@InjectModel(Event.name) private eventModel: Model<Event>){}



  async create(createEventDto: CreateEventDto): Promise<Event> {
    const { title, date, location, description, maxParticipants, participants } = createEventDto;
  
    
    const newEvent = new this.eventModel({
      title,
      date,
      location,
      description,
      maxParticipants,
      isActive: true, 
      participants,
    });
  
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
}
