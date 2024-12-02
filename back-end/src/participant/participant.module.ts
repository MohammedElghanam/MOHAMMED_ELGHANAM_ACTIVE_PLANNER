import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParticipantSchema } from './schemas/participant.schema';
import { AuthMiddleware } from 'src/common/auth.middleware';
import { EventSchema } from 'src/event/schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Participant', schema: ParticipantSchema}, { name: 'Event', schema: EventSchema }])
  ],
  controllers: [ParticipantController],
  providers: [ParticipantService],
})
export class ParticipantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ParticipantController);
  }
}
