import { Module } from '@nestjs/common';
import { MessageController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [AppService],
})
export class AppModule {}
