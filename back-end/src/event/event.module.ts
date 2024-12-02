import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventSchema } from './schemas/event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from 'src/common/auth.middleware';
import { Participant, ParticipantSchema } from 'src/participant/schemas/participant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Event', schema: EventSchema}, { name: Participant.name, schema: ParticipantSchema }])
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(EventController);
  }
}
