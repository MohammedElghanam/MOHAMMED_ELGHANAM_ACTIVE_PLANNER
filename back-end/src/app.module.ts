import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';
import { ParticipantModule } from './participant/participant.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }), 
  MongooseModule.forRoot(process.env.DB_NAME),
  AuthModule,
  EventModule,
  ParticipantModule,
  ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
