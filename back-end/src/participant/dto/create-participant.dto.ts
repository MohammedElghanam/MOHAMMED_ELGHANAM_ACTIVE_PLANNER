import { IsArray, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { Types } from 'mongoose';

export class CreateParticipantDto {
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsOptional()
    @IsArray()
    readonly events?: Types.ObjectId[];
}
