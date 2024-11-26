import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Participant } from '../../participant/schemas/participant.schema';

@Schema()
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  maxParticipants: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Participant' }] })
  participants: Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
