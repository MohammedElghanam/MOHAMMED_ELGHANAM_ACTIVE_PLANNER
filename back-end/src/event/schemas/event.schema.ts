import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Participant } from 'src/participant/schemas/participant.schema';

@Schema()
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Participant' }] })
  participants: Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
