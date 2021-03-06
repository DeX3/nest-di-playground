import { Module } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { ConfigModule } from 'config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [LoggingService]
})
export class LoggingModule {}
