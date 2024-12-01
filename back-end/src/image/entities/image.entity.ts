import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Image {
  @Prop()
  path: string;

}

export const ImageSchema = SchemaFactory.createForClass(Image);
