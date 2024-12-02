import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Event } from 'src/event/schemas/event.schema';

@Schema()
export class Participant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Event' }] })
  events: Types.ObjectId[];
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
