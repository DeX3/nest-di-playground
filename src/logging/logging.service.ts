import { Injectable, Inject } from '@nestjs/common';
import { Config } from 'config/Config';

@Injectable()
export class LoggingService {
  constructor(config: Config) {
    console.log('Setting up logger with', config);
  }
}
