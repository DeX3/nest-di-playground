import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Config } from 'config/Config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly config: Config) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
