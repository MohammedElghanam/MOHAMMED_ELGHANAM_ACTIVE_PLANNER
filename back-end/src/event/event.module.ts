import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventSchema } from './schemas/event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from 'src/common/auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Event', schema: EventSchema}])
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(EventController);
  }
}
