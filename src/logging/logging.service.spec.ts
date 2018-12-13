import { Test, TestingModule } from '@nestjs/testing';
import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingService],
    }).compile();
    service = module.get<LoggingService>(LoggingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
