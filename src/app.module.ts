import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './cats/cat.controller';
import { CatModule } from './cats/cat.module';
import { logger } from './logger.middleware';
import { YesNoModule } from './yes-no/yes-no.module';

@Module({
  imports: [CatModule, YesNoModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatController);
  }
}
