import { IsString, IsDate, IsOptional, IsNumber, IsBoolean, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsDate()
  date: Date;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  maxParticipants?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsArray()
  participants?: Types.ObjectId[];
}
