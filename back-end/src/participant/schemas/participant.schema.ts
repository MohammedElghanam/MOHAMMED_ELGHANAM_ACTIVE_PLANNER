import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Event } from '../../event/schemas/event.schema';


export type ParticipantDocument = HydratedDocument<Participant>;

@Schema()
export class Participant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Event' }] })
  events: Types.ObjectId[];
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
